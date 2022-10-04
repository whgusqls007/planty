from rest_framework import serializers
from .models import MyGarden, Diary
from django.contrib.auth import get_user_model
from plants.serializers import PlantListSerializer


# 나의 정원
class MyGardenSerializer(serializers.ModelSerializer):
    class DiaryForMyGardenSerializer(serializers.ModelSerializer):
        class Meta:
            model = Diary
            fields = ('id', 'content', 'date_created', 'diary_img')

    user = get_user_model()
    plant = PlantListSerializer(read_only=True)
    diaries = DiaryForMyGardenSerializer(many=True, read_only=True)

    class Meta:
        model = MyGarden
        fields = (
            'id', 'user', 'plant', 'diaries',
            'date_created', 'date_grow',
            'watering_schedule', 'recent_water',
            'diaries_count', 'img_url', 'memo',
            'present', 'preference', 'keep',
            )
        # 테스트용
        # fields = ('id', 'profile', 'user', 'date_created', 'date_grow', 'watering_schedule', 'recent_water', 'diaries_count', 'img_url', 'memo')
        read_only_fields = ('user', 'plant', 'diaries_count', 'img_url', 'date_created', 'diaries')


# 식물일기
class DiarySerializer(serializers.ModelSerializer):
    
    # my_garden = MyGardenSerializer(read_only=True)


    class Meta:
        model = Diary
        fields = ('id', 'my_garden', 'content', 'date_created', 'diary_img')
        read_only_fields = ('my_garden', 'diary_img')