from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator


class Level(models.Model):
    level_code = models.IntegerField(
        primary_key=True,
        verbose_name="등급코드",
    )
    threshold = models.IntegerField(verbose_name="기준")
    level_name = models.CharField(
        verbose_name="등급명",
        max_length=10,
    )


class User(AbstractUser):
    first_name = ""
    last_name = ""

    level_code = models.ForeignKey(Level, on_delete=models.CASCADE, default=1)
    nickname = models.CharField(verbose_name="닉네임", max_length=10)
    exp = models.IntegerField(
        verbose_name="경험치", default=0, validators=[MinValueValidator(0)]
    )
    point = models.IntegerField(
        verbose_name="포인트", default=0, validators=[MinValueValidator(0)]
    )
    profile_img = models.TextField(verbose_name="프로필 사진", null=True)
    is_editor = models.BooleanField(verbose_name="에디터 여부", default=False)