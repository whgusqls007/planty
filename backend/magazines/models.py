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
    title = models.CharField(verbose_name="게시글 제목", max_length=25)
    content = models.TextField(verbose_name="내용")

    def __str__(self):
        return self.title
