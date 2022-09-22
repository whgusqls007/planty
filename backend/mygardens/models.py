from tabnanny import verbose
from django.db import models
from django.conf import settings
from plants.models import Plant


# 나의 정원
class Garden(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="작성자",
        related_name="gardens",
    )
    plant = models.ForeignKey(
        Plant,
        on_delete=models.CASCADE,
        verbose_name="플랜트 이름",
        related_name="mygardens",
    )
    date_created = models.DateTimeField(
        auto_now_add=True,
        verbose_name="등록일자"
    )
    date_grow = models.DateField(
        verbose_name="키운날짜"
    )
    watering_schedule = models.IntegerField(
        verbose_name="물주기 주기"
    )
    recent_water = models.DateField(
        verbose_name="최근 물 준 날짜"
    )
    diaries_count = models.IntegerField(
        default=0,
        verbose_name="일기 개수"
    )
    img_url = models.TextField(
        verbose_name="식물 사진"
    )


# 식물일기
class Diary(models.Model):
    garden = models.ForeignKey(
        Garden,
        on_delete=models.CASCADE,
        verbose_name="식물일기 PK",
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
    )

    def __str__(self):
        return self.content