# Generated by Django 3.2.12 on 2022-09-21 01:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('plants', '0001_initial'),
        ('mygardens', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='garden',
            old_name='plant_img',
            new_name='img_url',
        ),
        migrations.AddField(
            model_name='garden',
            name='plant',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='mygardens', to='plants.plant', verbose_name='플랜트 이름'),
            preserve_default=False,
        ),
    ]
