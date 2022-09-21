from pyexpat import model
from rest_framework import serializers
from .models import MyGarden, Diary


# 나의 정원
class MyGardenSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyGarden
        fields = "__all__"
        read_only_fields = ['user', 'diaries_count']


# 식물일기
class DiarySerializer(serializers.ModelSerializer):
    
    my_garden = MyGardenSerializer(read_only=True)


    class Meta:
        model = Diary
        fields = ('id', 'my_garden', 'content', 'date_created', 'diary_img')