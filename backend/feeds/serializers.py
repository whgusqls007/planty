from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Feed, FeedComment
from django.contrib.auth import get_user_model


# 남의 정원
class UserSerializer(serializers.ModelSerializer):


        class Meta:
            # 레벨 등 추가하기
            model = get_user_model()
            fields = ('id', 'username')
    
    
class FeedSerializer(serializers.ModelSerializer):
    
    user = UserSerializer(read_only=True)


    class Meta:
        model = Feed
        fields = ('user', 'content', 'date_created', 'img_url', 'comments_count', 'likes_count', )
        read_only_fields = ('comments_count', 'likes_count', )


# 남의 정원 댓글
class FeedCommentSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)


    class Meta:
        model = FeedComment
        fields = ('id', 'user', 'content', 'magazine', 'date_created',)
        read_only_fields = ('feed', )