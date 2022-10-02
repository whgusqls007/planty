from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Feed, FeedComment
from rest_framework import viewsets, status
from .serializers import FeedSerializer, FeedCommentSerializer, FeedDetailSerializer
from core.utils import s3_upload_image
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# 남의 정원 CRUD
class FeedViewSet(viewsets.ModelViewSet):
    queryset = Feed.objects.all()
    serializer_class = FeedSerializer
    search_params = [
        openapi.Parameter(
            'search',
            openapi.IN_QUERY,
            description="검색 키워드",
            type=openapi.TYPE_STRING
            ),
        openapi.Parameter(
            'order',
            openapi.IN_QUERY,
            description="정렬기준 |  0 : 최신 순, 1: 좋아요 순, 2: 댓글 순",
            type=openapi.TYPE_INTEGER
        )]

    # 기존 구성된 내용에 오버라이딩 가능
    # get에 매칭, 리스트
    @swagger_auto_schema(
    operation_summary='피드 목록',
    manual_parameters=search_params
    )
    def list(self, request):
        search = self.request.query_params.get('search')
        queryset = self.get_queryset()
        
        if search:
            users = get_user_model().objects.filter(username__contains=search)
            queryset = queryset.filter(user__in=users)
            serializer = self.get_serializer(queryset, many=True)

        order = int(request.query_params.get('order', 0))
        order_list = ['-date_created', '-likes_count', '-comments_count']
        feeds = queryset.order_by(order_list[order])
        serializer = self.get_serializer(feeds, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    # get에 매칭, 상세페이지
    def retrieve(self, request, pk):
        feed = get_object_or_404(Feed, pk=pk)
        feed.is_liked = (request.user in feed.likes.all())
        serializer = FeedDetailSerializer(feed)

        return Response(serializer.data, status=status.HTTP_200_OK)


    # post에 매칭, 게시글 쓰기
    def create(self, request):
        data = eval(request.data['data'])
        serializer = FeedSerializer(data=data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            try:
                file=request.FILES['files']
            except:
                file=''
            file_path = s3_upload_image(file, 'feed/')
            serializer.save(user=user, img_url=file_path)
            user.exp = user.exp + 10
            user.articles_count = user.articles_count + 1
            user.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)

    
    # delete에 매칭, 게시글 삭제
    def destroy(self, request, pk):
        feed = get_object_or_404(Feed, pk=pk)
        user = request.user
        if user == feed.user:
            feed.delete()

            user.articles_count = user.articles_count - 1
            user.save()
            
            data = {
                'delete': f'{pk}번 데이터가 삭제되었습니다.'
            }

            return Response(data, status=status.HTTP_200_OK)


# 남의 정원 좋아요
class FeedLikeViewSet(viewsets.ViewSet):
    
    def like(self, request, feed_pk):
        feed = get_object_or_404(Feed, pk=feed_pk)
        user = request.user

        if feed.likes.filter(pk=user.pk).exists():
            feed.likes.remove(user)
            feed.likes_count = feed.likes_count - 1
            feed.save()

            user.likes_count = user.likes_count - 1
            user.save()

            return Response({'data' : 'Unlike_Feed OK'}, status=status.HTTP_200_OK)

        else:
            feed.likes.add(user)
            feed.likes_count = feed.likes_count + 1
            feed.save()

            user.likes_count = user.likes_count + 1
            user.save()

            return Response({'data' : 'Like_Feed OK'}, status=status.HTTP_200_OK)


# 남의 정원 댓글 CRUD
class FeedCommentViewSet(viewsets.ModelViewSet):
    queryset = Feed.objects.all()
    serializer_class = FeedCommentSerializer

    # post에 매칭, 댓글 작성
    def create(self, request, feed_pk):
        feed = get_object_or_404(Feed, pk=feed_pk)
        serializer = FeedCommentSerializer(data=request.data)
        user = request.user

        if serializer.is_valid(raise_exception=True):
            serializer.save(feed=feed, user=user)

            user.comments_count = user.comments_count + 1
            user.exp = user.exp + 5
            user.save()

            feed.comments_count = feed.comments_count + 1
            feed.save()
            
            comments = feed.feed_comments.all()
            serializers = FeedCommentSerializer(instance=comments, many=True)
            
            return Response(serializers.data, status=status.HTTP_201_CREATED)

    # put에 매칭, 댓글 수정
    def update(self, request, feed_pk, comment_pk):
        feed = get_object_or_404(Feed, pk=feed_pk)
        comment = get_object_or_404(FeedComment, pk=comment_pk)
        if request.user != comment.user:
            Response({'data': '권한이 없습니다!'}, status=status.HTTP_403_FORBIDDEN)

        serializer = FeedCommentSerializer(instance=comment, data=request.data)
        if serializer.is_valid():
            serializer.save()

            comments = feed.feed_comments.all()
            serializer = FeedCommentSerializer(instance=comments, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)


    # delete에 매칭, 댓글 삭제
    def destroy(self, request, feed_pk, comment_pk):
        feed = get_object_or_404(Feed, pk=feed_pk)
        comment = get_object_or_404(FeedComment, pk=comment_pk)

        if request.user == comment.user:
            comment.delete()
            
            request.user.comments_count = request.user.comments_count - 1
            request.user.save()

            feed.comments_count = feed.comments_count - 1
            feed.save()
            
            comments = feed.feed_comments.all()
            serializer = FeedCommentSerializer(instance=comments, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)


# 나의 정원 피드 목록
class MyFeedListViewSet(viewsets.ViewSet):

    @swagger_auto_schema(
    operation_summary='나의 정원 피드',
    operation_description='유저 이름으로 데이터 주고 받아야 합니다.')

    def list(self, reqeust, username):
        user = get_object_or_404(get_user_model(), username=username)
        serializer = FeedSerializer(Feed.objects.filter(user=user.id), many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)