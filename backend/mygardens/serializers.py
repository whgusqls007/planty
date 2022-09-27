from rest_framework import serializers
from .models import MyGarden, Diary
from django.contrib.auth import get_user_model
from plants.serializers import PlantListSerializer


# 유저 프로필

# 나의 정원
class MyGardenSerializer(serializers.ModelSerializer):

    user = get_user_model()
    plant = PlantListSerializer(read_only=True)

    class Meta:
        model = MyGarden
        fields = ('id', 'user', 'plant', 'date_created', 'date_grow', 'watering_schedule', 'recent_water', 'diaries_count', 'img_url', 'memo')
        # 테스트용
        # fields = ('id', 'profile', 'user', 'date_created', 'date_grow', 'watering_schedule', 'recent_water', 'diaries_count', 'img_url', 'memo')
        read_only_fields = ('user', 'plant', 'diaries_count', 'img_url', 'date_created')


# 식물일기
class DiarySerializer(serializers.ModelSerializer):
    
    my_garden = MyGardenSerializer(read_only=True)


    class Meta:
        model = Diary
        fields = ('id', 'my_garden', 'content', 'date_created', 'diary_img')


