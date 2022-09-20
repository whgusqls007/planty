from django.shortcuts import render
from rest_framework.response import Response
from .models import Magazine, MagazineComment
from rest_framework import viewsets, status
from .serializers import MagazineSerializer, MagazineCommentSerializer


# 읽을거리 CRUD
class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer

    # 기존 구성된 내용에 오버라이딩 가능
    # get에 매칭, 리스트
    def list(self, request):
        serializer = self.get_serializer(self.queryset, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)


    # get에 매칭, 상세페이지
    def retrieve(self, request, pk):
        serializer = self.get_serializer(Magazine.objects.get(pk=pk))

        return Response(serializer.data, status=status.HTTP_200_OK)


    # post에 매칭, 게시글 쓰기
    def create(self, request):
        serializer = MagazineSerializer(data=request.data)
        user = request.user
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=user)
            user.exp = user.exp + 1
            user.articles_count = user.articles_count + 1
            user.save()

            return Response(serializer.data, status=status.HTTP_201_CREATED)

    
    # delete에 매칭, 게시글 삭제
    def destroy(self, request, pk):
        magazine = Magazine.objects.get(pk=pk)
        user = request.user
        if user == magazine.user:
            magazine.delete()

            user.articles_count = user.articles_count - 1
            user.save()
            
            data = {
                'delete': f'{pk}번 데이터가 삭제되었습니다.'
            }

            return Response(data, status=status.HTTP_200_OK)


# 읽을거리 좋아요
class MagazineLikeView(viewsets.ViewSet):
    
    def like(self, request, magazine_pk):
        magazine = Magazine.objects.get(pk=magazine_pk)
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
        magazine = Magazine.objects.get(pk=magazine_pk)
        serializer = MagazineCommentSerializer(data=request.data)
        user = request.user

        if serializer.is_valid(raise_exception=True):
            serializer.save(magazine=magazine, user=user)

            user.comments_count = user.comments_count + 1
            user.save()

            magazine.comments_count = magazine.comments_count + 1
            magazine.save()
            
            # 댓글목록 자체를 반환, 읽을거리 새로고침 없이도 댓글목록만 갈아끼울 수 있도록
            comments = magazine.comments.all()
            serializers = MagazineCommentSerializer(instance=comments, many=True)
            
            return Response(serializers.data, status=status.HTTP_201_CREATED)

    # put에 매칭, 댓글 수정
    def update(self, request, magazine_pk, comment_pk):
        magazine = Magazine.objects.get(pk=magazine_pk)
        comment = MagazineComment.objects.get(pk=comment_pk)

        if request.user == comment.user:
            serializer = MagazineCommentSerializer(instance=comment, data=request.data)
            serializer.save()

            comments = magazine.comments.all()
            serializer = MagazineCommentSerializer(instance=comments, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)


    # delete에 매칭, 댓글 삭제
    def destroy(self, request, magazine_pk, comment_pk):
        magazine = Magazine.objects.get(pk=magazine_pk)
        comment = MagazineComment.objects.get(pk=comment_pk)

        if request.user == comment.user:
            comment.delete()
            
            request.user.comments_count = request.user.comments_count - 1
            request.user.save()

            magazine.comments_count = magazine.comments_count - 1
            magazine.save()
            
            comments = magazine.comments.all()
            serializer = MagazineCommentSerializer(instance=comments, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)