from pyexpat import model
from rest_framework import serializers
from .models import Garden, Diary


# 나의 정원
class GardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Garden
        fields = "__all__"
        # read_only_fields = ['user', 'plant']
        read_only_fields = ['user',]


# 식물일기
class DiarySerializer(serializers.ModelSerializer):
    
    garden = GardenSerializer(read_only=True)


    class Meta:
        model = Diary
        fields = ('id', 'garden', 'content', 'date_created', 'diary_img')