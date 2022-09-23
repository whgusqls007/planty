from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from magazines.serializers import UserSerializer
from .models import Feed, FeedComment
from django.contrib.auth import get_user_model


# 남의 정원    
class FeedSerializer(serializers.ModelSerializer):
    
    user = UserSerializer(read_only=True)


    class Meta:
        model = Feed
        fields = ('id', 'user', 'content', 'date_created', 'img_url', 'comments_count', 'likes_count', )
        read_only_fields = ('user', 'comments_count', 'likes_count', 'img_url')


# 남의 정원 댓글
class FeedCommentSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)


    class Meta:
        model = FeedComment
        fields = ('id', 'user', 'content', 'feed', 'date_created',)
        read_only_fields = ('feed', 'user',)