from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import User

# Create your views here.

class FollowView(viewsets.ViewSet):

    def follow(self, request, pk):
        person = User.objects.get(pk=pk)
        me = request.user
        # 팔로우 안 됐을 때 - 팔로우
        if person.followers.filter(pk=me.pk).exists():
            person.followers.remove(me)
            return Response({'data' : 'Unfollow OK'}, status=status.HTTP_200_OK)

        # 팔로우가 이미 되어 있을 때 - 언팔로우
        else:
            person.followers.add(me)
            return Response({'data' : 'Follow OK'}, status=status.HTTP_200_OK)
