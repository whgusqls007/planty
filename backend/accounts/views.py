from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import User


# 팔로우 기능
class FollowViewSet(viewsets.ViewSet):

    def follow(self, request, pk):
        person = get_object_or_404(User, pk=pk)
        me = request.user
        # 팔로우가 이미 되어 있을 때 - 언팔로우
        if person.followers.filter(pk=me.pk).exists():
            person.followers.remove(me)
            person.followers_count = person.followers_count - 1
            person.save()

            me.follows_count = me.follows_count - 1
            me.save()

            return Response({'data' : 'Unfollow OK'}, status=status.HTTP_200_OK)

        # 팔로우가 안 되어 있을 때 - 팔로우
        else:
            person.followers.add(me)
            person.followers_count = person.followers_count + 1
            person.save()
            
            me.follows_count = me.follows_count + 1
            me.save()
            
            return Response({'data' : 'Follow OK'}, status=status.HTTP_200_OK)


# 닉네임 중복 확인
class UsernameCheckViewSet(viewsets.ViewSet):
    
    def check(self, request):
        if User.objects.filter(username=request.data["username"]).exists():
            return Response({'data' : False}, status=status.HTTP_200_OK)

        return Response({'data' : True}, status=status.HTTP_200_OK)


# 이메일 중복 확인
class EmailCheckViewSet(viewsets.ViewSet):

    def check(self, request):
        print(request.data)
        if User.objects.filter(email=request.data["email"]).exists():
            return Response({'data' : False}, status=status.HTTP_200_OK)

        return Response({'data' : True}, status=status.HTTP_200_OK)

        