from rest_framework import serializers
from .models import MyGarden, Diary
from django.contrib.auth import get_user_model
from plants.serializers import PlantListSerializer


# 유저 프로필
class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ('profile_img', 'username', 'description', 'exp', 'is_private', 'plants_count', 'followers_count', 'follows_count', 'description')
        read_only_fields = ('profile_img', 'username', 'is_private', 'exp', 'plants_count', 'followers_count', 'follows_count', 'description')


# 나의 정원
class MyGardenSerializer(serializers.ModelSerializer):

    profile = ProfileSerializer()
    plant = PlantListSerializer()

    class Meta:
        model = MyGarden
        fields = ('profile', 'user', 'plant', 'date_created', 'date_grow', 'watering_schedule', 'recent_water', 'diaries_count', 'img_url', 'memo')
        # 테스트용
        # fields = ('id', 'profile', 'user', 'date_created', 'date_grow', 'watering_schedule', 'recent_water', 'diaries_count', 'img_url', 'memo')
        read_only_fields = ('profile', 'user', 'plant', 'diaries_count', 'img_url', 'date_created')


# 식물일기
class DiarySerializer(serializers.ModelSerializer):
    
    my_garden = MyGardenSerializer(read_only=True)


    class Meta:
        model = Diary
        fields = ('id', 'my_garden', 'content', 'date_created', 'diary_img')


