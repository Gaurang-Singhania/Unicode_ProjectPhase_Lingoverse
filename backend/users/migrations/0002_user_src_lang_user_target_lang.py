# Generated by Django 5.0.3 on 2024-03-30 06:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='src_lang',
            field=models.CharField(default='en', max_length=20),
        ),
        migrations.AddField(
            model_name='user',
            name='target_lang',
            field=models.CharField(default='en', max_length=20),
        ),
    ]