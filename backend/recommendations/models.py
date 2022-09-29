from django.db import models
from django.conf import settings

class UserKeywordCount(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name = "유저"
    )
    pet_safe = models.IntegerField(
        default=0,
        verbose_name="반려동물 안전성"
    )
    humidify = models.IntegerField(
        default=0,
        verbose_name="가습 기능"
    )
    pm_cleaning = models.IntegerField(
        default=0,
        verbose_name="미세먼지 정화 기능"
    )
    air_cleaning = models.IntegerField(
        default=0,
        verbose_name="공기 정화 기능"
    )
    beginner = models.IntegerField(
        default=0,
        verbose_name="초보자용"
    )
    unscented = models.IntegerField(
        default=0,
        verbose_name="무향"
    )
    hydroponics = models.IntegerField(
        default=0,
        verbose_name="수경 재배용"
    )
    low_growth_demand = models.IntegerField(
        default=0,
        verbose_name="손쉬운 관리"
    )
    low_light_demand = models.IntegerField(
        default=0,
        verbose_name="적은 빛"
    )
    low_temp = models.IntegerField(
        default=0,
        verbose_name="낮은 온도"
    )