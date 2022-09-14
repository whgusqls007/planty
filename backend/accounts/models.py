from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.core.mail import send_mail
from django.utils import timezone
from django.contrib.auth.validators import UnicodeUsernameValidator
from django.utils.translation import gettext_lazy as _
from django.core.validators import MinValueValidator


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, username, email, nickname, password, **extra_fields):
        if not email:
            raise ValueError('Email을 입력해주세요.')
        if not nickname:
            raise ValueError('닉네임을 입력해주세요.')

        email = self.normalize_email(email)
        # username = self.model.normalize_username(username)
        # nickname = self.model.normalize_username(nickname)
        user = self.model(username=username, email=email, nickname=nickname, **extra_fields)
        user.set_password(password)
        user.save(using=self.db)
        return user

    def create_user(self, username, email, nickname, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(username, email, nickname, password, **extra_fields)

    def create_superuser(self, username, email, password, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        # if extra_fields.get('is_staff') is not True:
        #     raise ValueError('is_staff=True?')
        # if extra_fields.get('is_superuser') is not True:
        #     raise ValueError('is_superuser=True?')
        return self._create_user(username, email, 'admin', password, **extra_fields)


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
class User(AbstractBaseUser, PermissionsMixin):
    username_validator = UnicodeUsernameValidator()

    level_code = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        default=1
    )
    username = models.CharField(_("username"), max_length=50, validators=[username_validator], blank=True)
    email = models.EmailField(_("email_address"), unique=True)
    is_staff = models.BooleanField(_("staff status"), default=False)
    is_active = models.BooleanField(_("active"), default=True)
    date_joined = models.DateTimeField(_("date joined"), default=timezone.now)

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
    is_editor = models.BooleanField(
        verbose_name="에디터 여부",
        default=False
    )


    objects = UserManager()
    USERNAME_FIELD = "email"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def clean(self):
        super().clean()
        self.email = self.__class__.objects.normalize_email(self.email)
        self.username = self.model.normalize_username(self.username)

    # def email_user(self, subject, message, from_email=None, **kwargs):
    #     send_mail(subject, message, from_email, [self.email], **kwargs)