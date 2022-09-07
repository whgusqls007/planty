from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator


class User(AbstractUser):
    nickname = models.CharField(verbose_name="닉네임", max_length=10)
    exp = models.IntegerField(verbose_name="경험치", default=0, validators=[MinValueValidator(0)])
    point = models.IntegerField(verbose_name="포인트", default=0, validators=[MinValueValidator(0)])
    profile_img = models.TextField(verbose_name="프로필 사진", null=True)