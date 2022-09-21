from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator


# Create your models here.
class Magazine(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="작성자",
    )
    title = models.CharField(
        verbose_name="게시글 제목",
        max_length=15
    )
    sub_title = models.CharField(
        verbose_name="게시글 소제목",
        max_length=25
    )
    content = models.TextField(
        verbose_name="내용"
    )
    date_created = models.DateTimeField(
        verbose_name="읽을거리 작성일자",
        auto_now_add=True
    )
    comments_count = models.IntegerField(
        verbose_name="댓글 개수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    likes_count = models.IntegerField(
        verbose_name="좋아요 개수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    img_url = models.TextField(
        verbose_name="썸네일 이미지",
    )
    likes = models.ManyToManyField(
        settings.AUTH_USER_MODEL,
        related_name="like_magazines",
        through="MagazineLike"
    )

    def __str__(self):
        return self.title


# 읽을거리 좋아요
class MagazineLike(models.Model):
    magazine = models.ForeignKey(
        Magazine,
        on_delete=models.CASCADE,
        verbose_name="읽을거리 PK",
    )
    like_user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="내 아이디",
    )
    date_created = models.DateTimeField(
        verbose_name="좋아요 누른 시각",
        auto_now_add=True
    )


# 읽을거리 댓글
class MagazineComment(models.Model):
    magazine = models.ForeignKey(
        Magazine,
        on_delete=models.CASCADE,
        verbose_name="읽을거리 PK",
        related_name="comments"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="내 아이디",
        related_name="comments"
    )
    content = models.TextField(
        verbose_name="댓글 내용"
    )
    date_created = models.DateTimeField(
        verbose_name="댓글 작성일",
        auto_now_add=True
    )

    def __str__(self):
        return self.content