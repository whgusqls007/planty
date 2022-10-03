from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator
from django.conf import settings


# 멤버십 등급
class Level(models.Model):
    level_code = models.IntegerField(
        primary_key=True,
        verbose_name="등급코드",
    )
    threshold = models.IntegerField(
        verbose_name="기준"
    )
    level_name = models.CharField(
        verbose_name="등급명",
        max_length=10,
    )

    def __str__(self):
        return self.level_name


# 유저
class User(AbstractUser):
    first_name = ""
    last_name = ""
    
    exp = models.IntegerField(
        verbose_name="경험치",
        default=0,
        validators=[MinValueValidator(0)]
    )
    profile_img = models.TextField(
        verbose_name="프로필 사진",
        default='https://homidu.s3.ap-northeast-2.amazonaws.com/user/default-user-img.png'
    )
    is_editor = models.BooleanField(
        verbose_name="에디터 여부",
        default=False
    )
    description = models.TextField(
        verbose_name="한줄 소개",
        default="한줄 소개가 없습니다.",
    )
    is_private = models.BooleanField(
        verbose_name = "나의 정원 비공개 설정",
        default=False
    )
    plants_count = models.IntegerField(
        verbose_name="반려식물 개수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    followers_count = models.IntegerField(
        verbose_name="팔로워 수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    follows_count = models.IntegerField(
        verbose_name="팔로우 수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    articles_count = models.IntegerField(
        verbose_name="내가 쓴 글 수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    comments_count = models.IntegerField(
        verbose_name="내가 쓴 댓글 수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    likes_count = models.IntegerField(
        verbose_name="좋아요한 글 수",
        default=0,
        validators=[MinValueValidator(0)]
    )
    date_of_birth = models.DateField(
        verbose_name="생년월일",
        null=True
    )
    followings = models.ManyToManyField(
        'self',
        symmetrical=False,
        related_name="followers",
        through="Follow",
    )
    age_group = models.CharField(
        verbose_name="연령대",
        max_length=10,
        null=True,
    )
    
    @property
    def grade(self):
        levels = Level.objects.all()
        tmp = 1
        for level in levels:
            if level.threshold <= self.exp:
                tmp = level.level_name
        return tmp
        


# 팔로우
class Follow(models.Model):
    follow_user = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE,
    verbose_name="내 아이디",
    related_name="following_users"
    )

    following_user = models.ForeignKey(
    settings.AUTH_USER_MODEL,
    on_delete=models.CASCADE,
    verbose_name="팔로우한 유저 아이디",
    related_name="follow_users"
    )

    date_created = models.DateTimeField(
        verbose_name="팔로우한 시각",
        auto_now_add=True
    )
