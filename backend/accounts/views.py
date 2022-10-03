from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import User
from .serializers import DescriptionSerializer, ProfileSerializer, MyPageSerializer
from drf_yasg.utils import swagger_auto_schema
from collections import OrderedDict
from feeds.serializers import FeedCommentUserSerializer
from magazines.serializers import MagazineCommentUserSerializer
from datetime import datetime

# 나의 정원 유저 프로필
class ProfileViewSet(viewsets.ViewSet):

    # swagger 설명
    @swagger_auto_schema(
    operation_summary='나의 정원 유저 프로필',
    operation_description='유저 이름으로 데이터 주고 받아야 합니다.')
    def profile(self, request, username):
        user = get_object_or_404(get_user_model(), username=username)
        user.is_follow = (request.user in user.followers.all())
        serializer = ProfileSerializer(user)
        
        return Response(serializer.data, status=status.HTTP_200_OK)


# 나의 정원 한줄 소개 수정
class DescriptionViewSet(viewsets.ViewSet):

    # swagger 설명
    @swagger_auto_schema(
    operation_summary='나의 정원 한줄 소개 수정',
    request_body=DescriptionSerializer)

    def update_description(self, request):
        profile = get_object_or_404(get_user_model(), pk=request.user.id)
        serializer = DescriptionSerializer(instance=profile, data=request.data)
        # serializer.data = request.data
        print(request.data)
        print("===========")

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)


# 마이페이지 유저 정보
class MyPageViewSet(viewsets.ViewSet):
    @swagger_auto_schema(
        operation_summary='마이페이지에 띄울 유저 정보',
        operation_description='토큰으로 접근합니다.',
        )
    # get에 매칭, 유저 정보 조회
    def userinfo(self, request):
        serializer = MyPageSerializer(request.user)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

# 유저 댓글 정보
class UserCommentViewSet(viewsets.ViewSet):
    
    # get에 매칭, 유저가 쓴 댓글 조회
    def user_comments(self, request):
        user = request.user
        feed_serializers = FeedCommentUserSerializer(user.feed_comments.all(), many=True)
        magazine_serializers = MagazineCommentUserSerializer(user.comments.all(), many=True)
        data = feed_serializers.data + magazine_serializers.data
        data = sorted(data, key=lambda x: datetime.strptime(x['date_created'][:19], "%Y-%m-%dT%H:%M:%S"))[::-1]
        
        return Response(data, status=status.HTTP_200_OK)

class UserLikeViewSet(viewsets.ViewSet):

    # get에 매칭, 유저가 쓴 댓글 조회
    def user_likes(self, request):
        pass


# post에 매칭, 팔로우
class FollowViewSet(viewsets.ViewSet):

    def follow(self, request, username):
        person = get_object_or_404(get_user_model(), username=username)
        me = request.user
        # 팔로우가 이미 되어 있을 때 - 언팔로우
        if person.followers.filter(pk=me.pk).exists():
            person.followers.remove(me)
            person.followers_count = person.followers_count - 1
            person.save()

            me.follows_count = me.follows_count - 1
            me.save()

            person.is_follow = False
            # serializer = ProfileSerializer(person)

            # return Response(serializer.data, status=status.HTTP_200_OK)

        # 팔로우가 안 되어 있을 때 - 팔로우
        else:
            person.followers.add(me)
            person.followers_count = person.followers_count + 1
            person.save()
            
            me.follows_count = me.follows_count + 1
            me.save()
            person.is_follow = True
        serializer = ProfileSerializer(person)
        
        return Response(serializer.data, status=status.HTTP_200_OK)


# post에 매칭, 닉네임 중복 확인
class UsernameCheckViewSet(viewsets.ViewSet):
    
    def check(self, request):
        if User.objects.filter(username=request.data["username"]).exists():
            return Response({'data' : False}, status=status.HTTP_200_OK)

        return Response({'data' : True}, status=status.HTTP_200_OK)


# post에 매칭, 이메일 중복 확인
class EmailCheckViewSet(viewsets.ViewSet):

    def check(self, request):
        print(request.data)
        if User.objects.filter(email=request.data["email"]).exists():
            return Response({'data' : False}, status=status.HTTP_200_OK)

        return Response({'data' : True}, status=status.HTTP_200_OK)



# 프로필 수정 - username, date_of_birth, 비밀번호
# patch -> 한줄 소개만 수정하도록
# get, post, delete, put, patch