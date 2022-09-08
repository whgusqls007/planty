from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator


class Level(models.Model):
    level_code = models.IntegerField(
        primary_key=True,
        verbose_name="등급코드"
    )
    threshold = models.IntegerField(
        verbose_name="기준"
    )
    level_name = models.CharField(
        verbose_name="등급명"
    )

class User(AbstractUser):
    level_code = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
    )
    nickname = models.CharField(
        verbose_name="닉네임",
        max_length=10
    )
    exp = models.IntegerField(
        verbose_name="경험치",
        default=0,
        validators=[MinValueValidator(0)]
    )
    point = models.IntegerField(
        verbose_name="포인트",
        default=0,
        validators=[MinValueValidator(0)]
    )
    profile_img = models.TextField(
        verbose_name="프로필 사진",
        null=True
    )
    is_superuser = models.BooleanField(
        verbose_name="관리자 여부",
        default=False
    )