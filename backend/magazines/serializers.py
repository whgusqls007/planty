from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import Magazine
from django.contrib.auth import get_user_model

class MagazineSerializer(serializers.ModelSerializer):

    class UserSerializer(serializers.ModelSerializer):


        class Meta:
            model = get_user_model()
            fields = ('pk', 'username')
    
    user = UserSerializer(read_only=True)

    class Meta:
        model = Magazine
        fields = "__all__"