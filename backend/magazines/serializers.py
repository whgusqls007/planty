from rest_framework import serializers
from .models import Magazine, MagazineComment
from django.contrib.auth import get_user_model


# 읽을거리
class UserSerializer(serializers.ModelSerializer):


        class Meta:
            # 레벨, 에디터여부 등 추가해주기
            model = get_user_model()
            fields = ('id', 'username', )
    
    
class MagazineSerializer(serializers.ModelSerializer):
    
    

    class MagazineInnerCommentSerializer(serializers.ModelSerializer):
        user = UserSerializer(read_only=True)
        
        class Meta:
            model = MagazineComment
            fields = ('id', 'user', 'content', 'date_created',)
            read_only_fields = ['user', ]

    user = UserSerializer(read_only=True)
    comments = MagazineInnerCommentSerializer(read_only=True, many=True)

    class Meta:
        model = Magazine
        fields = ('id', 'user', 'title', 'sub_title', 'content', 'date_created', 'comments_count', 'likes_count', 'img_url', 'comments')
        read_only_fields = ['user', 'comments_count', 'likes_count', ]


# 읽을거리 댓글
class MagazineCommentSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)


    class Meta:
        model = MagazineComment
        fields = ('id', 'user', 'content', 'magazine', 'date_created',)
        read_only_fields = ['magazine', 'user', ]