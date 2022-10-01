from email.policy import default
from django.db import models
from django.conf import settings
from plants.models import Plant


# 나의 정원
class MyGarden(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="작성자",
    )
    plant = models.ForeignKey(
        Plant,
        on_delete=models.CASCADE,
        verbose_name="플랜트 PK",
    )
    date_created = models.DateTimeField(
        auto_now_add=True,
        verbose_name="등록일자"
    )
    date_grow = models.DateField(
        verbose_name="키운 날짜",
        null=True
    )
    watering_schedule = models.IntegerField(
        verbose_name="물주는 주기",
        null=True
    )
    recent_water = models.DateField(
        verbose_name="최근 물 준 날짜",
        null=True
    )
    diaries_count = models.IntegerField(
        verbose_name="일기 개수",
        default=0
    )
    img_url = models.TextField(
        verbose_name="식물 사진",
        null=True # default로 고치기
    )
    memo = models.TextField(
        verbose_name="한줄소개 메모",
        null=True
    )
    present = models.BooleanField(
        default=False,
        verbose_name="선물용 여부"
    )
    preference = models.IntegerField(
        verbose_name="선호도",
        default=0
    )
    keep = models.BooleanField(
        verbose_name="식물 보관 여부",
        default=False
    )
    

    def __str__(self):
        return self.user


# 식물일기
class Diary(models.Model):
    my_garden = models.ForeignKey(
        MyGarden,
        on_delete=models.CASCADE,
        verbose_name="나의 정원 PK",
        related_name="diaries"
    )
    content = models.TextField(
        verbose_name="일기 내용"
    )
    date_created = models.DateTimeField(
        verbose_name="일기 작성일",
        auto_now_add=True
    )
    diary_img = models.TextField(
        verbose_name="식물일기 사진",
        null=True # default로 바꾸기
    )

    def __str__(self):
        return self.my_garden