# Generated by Django 3.2.12 on 2022-09-23 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0003_alter_user_age_group'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_img',
            field=models.TextField(default='https://homidu.s3.ap-northeast-2.amazonaws.com/user/default-user-img.png', verbose_name='프로필 사진'),
        ),
    ]