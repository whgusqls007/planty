from django.contrib.auth import get_user_model
from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer


# 회원가입
class CustomRegisterSerializer(RegisterSerializer):
    # 기본 설정 필드: username, password, email
    # 추가 설정 필드: date_of_birth
    date_of_birth = serializers.DateField()

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['date_of_birth'] = self.validated_data.get('date_of_birth', '')

        return data


# 유저 프로필
class ProfileSerializer(serializers.ModelSerializer):

    is_follow = serializers.BooleanField(default=False)

    class Meta:
        model = get_user_model()
        fields = ('profile_img', 'username', 'description', 'exp', 'is_private', 'plants_count', 'followers_count', 'follows_count', 'description', 'is_follow')
        read_only_fields = ('profile_img', 'username', 'is_private', 'exp', 'plants_count', 'followers_count', 'follows_count', 'description')


# 한줄소개 수정
class DescriptionSerializer(serializers.ModelSerializer):


    class Meta:
        model = get_user_model()
        fields = ('description',)

