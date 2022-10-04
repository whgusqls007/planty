from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Magazine, MagazineComment
from rest_framework import viewsets, status
from .serializers import MagazineSerializer, MagazineCommentSerializer, MagazineDetailSerializer
from collections import OrderedDict
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from django.contrib.auth import get_user_model
from django.db.models import Q

# 읽을거리 CRUD
class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer

    list_params = [
        openapi.Parameter(
            'limit',
            openapi.IN_QUERY,
            description="Limit",
            type=openapi.TYPE_INTEGER),
        openapi.Parameter(
            'offset',
            openapi.IN_QUERY,
            description="Offset",
            type=openapi.TYPE_INTEGER
        ),
        openapi.Parameter(
            'order',
            openapi.IN_QUERY,
            description="정렬기준 |  0 : 최신 순, 1: 좋아요 순, 2: 댓글 순",
            type=openapi.TYPE_INTEGER
        ),
        openapi.Parameter(
            'search',
            openapi.IN_QUERY,
            description="검색 키워드",
            type=openapi.TYPE_STRING
        ),
        openapi.Parameter(
            'searchBy',
            openapi.IN_QUERY,
            description="검색기준 |  0: 제목, 1: 글쓴이, 2: 내용, 3: 제목+내용",
            type=openapi.TYPE_INTEGER
        ),
        
    ]
    # 기존 구성된 내용에 오버라이딩 가능
    # get에 매칭, 리스트
    @swagger_auto_schema(
    operation_summary='읽을거리 목록',
    operation_description='페이지네이션',
    manual_parameters=list_params
    )
    def list(self, request):
        search = self.request.query_params.get('search')
        search_by = int(request.query_params.get('searchBy', 0))
        queryset = self.get_queryset()
        
        # 검색기준 0: 제목, 1: 글쓴이, 2: 내용, 3: 제목+내용
        if search:
            if search_by == 0:
                queryset = queryset.filter(title__contains=search)
            elif search_by == 1:
                users = get_user_model().objects.filter(username__contains=search)
                queryset = queryset.filter(user__in=users)
            elif search_by == 2:
                queryset = queryset.filter(content__contains=search)
            elif search_by == 3:
                queryset = queryset.filter(Q(title__contains=search) | Q(content__contains=search))
        
        limit = int(request.query_params.get('limit', len(queryset)))
        offset = int(request.query_params.get('offset', 0))
        # 0 : 최신 순, 1: 좋아요 순, 2: 댓글 순
        order = int(request.query_params.get('order', 0))
        order_list = ['-date_created', '-likes_count', '-comments_count']
        magazines = queryset.order_by(order_list[order])[offset:offset + limit]
        serializer = self.get_serializer(magazines, many=True)
        
        return Response(OrderedDict([
            ('count', len(queryset)),
            ('results', serializer.data)
        ]), status=status.HTTP_200_OK)


    # get에 매칭, 상세페이지
    def retrieve(self, request, pk):
        # magazine = Magazine.objects.get(pk=pk)
        magazine = get_object_or_404(Magazine, pk=pk)
        magazine.is_liked = (request.user in magazine.likes.all())
        serializer = MagazineDetailSerializer(magazine)

        return Response(serializer.data, status=status.HTTP_200_OK)


    # post에 매칭, 게시글 쓰기
    def create(self, request):
        serializer = MagazineSerializer(data=request.data)
        user = request.user

        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)

            user.exp = user.exp + 20
            user.articles_count = user.articles_count + 1
            user.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

    
    # delete에 매칭, 게시글 삭제
    def destroy(self, request, magazine_pk):
        magazine = get_object_or_404(Magazine, pk=magazine_pk)
        user = request.user
        if user == magazine.user:
            magazine.delete()

            user.articles_count = user.articles_count - 1
            user.save()
            
            data = {
                'delete': f'{magazine_pk}번 데이터가 삭제되었습니다.'
            }

            return Response(data, status=status.HTTP_200_OK)


# 읽을거리 좋아요
class MagazineLikeViewSet(viewsets.ViewSet):

    # post에 매칭, 좋아요
    def like(self, request, magazine_pk):
        magazine = get_object_or_404(Magazine, pk=magazine_pk)
        user = request.user

        if magazine.likes.filter(pk=user.pk).exists():
            magazine.likes.remove(user)

            magazine.likes_count = magazine.likes_count - 1
            magazine.save()

            user.likes_count = user.likes_count - 1
            user.save()

            return Response({'data' : 'Unlike_Magazine OK'}, status=status.HTTP_200_OK)

        else:
            magazine.likes.add(user)
            
            magazine.likes_count = magazine.likes_count + 1
            magazine.save()

            user.likes_count = user.likes_count + 1
            user.save()

            return Response({'data' : 'Like_Magazine OK'}, status=status.HTTP_200_OK)


# 읽을거리 댓글 CRUD
class MagazineCommentViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineCommentSerializer

    # post에 매칭, 댓글 작성
    def create(self, request, magazine_pk):
        magazine = get_object_or_404(Magazine, pk=magazine_pk)
        serializer = MagazineCommentSerializer(data=request.data)
        user = request.user

        if serializer.is_valid():
            serializer.save(magazine=magazine, user=user)

            user.comments_count = user.comments_count + 1
            user.exp = user.exp + 5
            user.save()

            magazine.comments_count = magazine.comments_count + 1
            magazine.save()
            
            # 댓글목록 자체를 반환, 읽을거리 새로고침 없이도 댓글목록만 갈아끼울 수 있도록
            comments = magazine.comments.all()
            serializers = MagazineCommentSerializer(instance=comments, many=True)
            
            return Response(serializers.data, status=status.HTTP_201_CREATED)

    # put에 매칭, 댓글 수정
    def update(self, request, magazine_pk, comment_pk):
        magazine = get_object_or_404(Magazine, pk=magazine_pk)
        comment = get_object_or_404(MagazineComment, pk=comment_pk)
        if request.user != comment.user:
            Response({'data': '권한이 없습니다!'}, status=status.HTTP_403_FORBIDDEN)

        serializer = MagazineCommentSerializer(instance=comment, data=request.data)
        serializer.is_valid()
        print(serializer.errors)
        if serializer.is_valid():
            serializer.save()

            comments = magazine.comments.all()
            serializers = MagazineCommentSerializer(instance=comments, many=True)
            
            return Response(serializers.data, status=status.HTTP_200_OK)


    # delete에 매칭, 댓글 삭제
    def destroy(self, request, magazine_pk, comment_pk):
        magazine = get_object_or_404(Magazine, pk=magazine_pk)
        comment = get_object_or_404(MagazineComment, pk=comment_pk)

        if request.user == comment.user:
            comment.delete()
            
            request.user.comments_count = request.user.comments_count - 1
            request.user.save()

            magazine.comments_count = magazine.comments_count - 1
            magazine.save()
            
            comments = magazine.comments.all()
            serializer = MagazineCommentSerializer(instance=comments, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)