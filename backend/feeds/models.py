from django.db import models
from django.conf import settings
from django.core.validators import MinValueValidator


class Feed(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="작성자",
    )
    content = models.TextField(
        verbose_name="내용",
    )
    date_created = models.DateTimeField(
        verbose_name="읽을거리 작성일자",
        auto_now_add=True
    )
    img_url = models.TextField(
        verbose_name="사진",
        null=True, # default로 고치기
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
    likes = models.ManyToManyField(
    settings.AUTH_USER_MODEL,
    related_name="like_feeds",
    through="FeedLike"
    )

    def __str__(self):
        return self.content


# 남의 정원 좋아요
class FeedLike(models.Model):
    feed = models.ForeignKey(
        Feed,
        on_delete=models.CASCADE,
        verbose_name="남의 정원 PK",
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


# 남의 정원 댓글
class FeedComment(models.Model):
    feed = models.ForeignKey(
        Feed,
        on_delete=models.CASCADE,
        verbose_name="남의 정원 PK",
        related_name="feed_comments"
    )
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        verbose_name="내 아이디",
        related_name="feed_comments"
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