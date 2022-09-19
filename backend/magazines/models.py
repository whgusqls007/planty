from django.db import models
from django.conf import settings


# Create your models here.
class Magazine(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="magazines",
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
        default=0
    )
    likes_count = models.IntegerField(
        verbose_name="좋아요 개수",
        default=0
    )
    img_url = models.TextField(
        verbose_name="썸네일 이미지",
    )

    def __str__(self):
        return self.title
