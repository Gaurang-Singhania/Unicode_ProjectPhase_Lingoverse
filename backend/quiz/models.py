from django.db import models
import uuid

# Create your models here.    
class WordQuestion(models.Model):
    DIFFICULTY_CHOICES = (
        ('easy', 'Beginner'),
        ('medium', 'Elementary'),
        ('hard', 'Intermediate'),
    )
    LANGUAGE_CHOICES = (
        ('en', 'English'),
        ('fr', 'French'),
        ('es', 'Spanish'),
        ('ja', 'Japanese'),
        ('hi', 'Hindi'),
    )
    word = models.CharField(max_length=255)
    correct_alt = models.CharField(max_length=255)
    pronounciation = models.CharField(max_length=255, null=True)
    alt1 = models.CharField(max_length=255)
    alt2 = models.CharField(max_length=255)
    alt3 = models.CharField(max_length=255)
    diff = models.CharField(max_length=6, choices=DIFFICULTY_CHOICES)
    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)
    repeated = models.IntegerField(default=0)
    def __str__(self):
        return self.language + ' ' + self.diff + ' ' + str(self.id)
    
class ImageQuestion(models.Model):
    DIFFICULTY_CHOICES = (
        ('easy', 'Beginner'),
        ('medium', 'Elementary'),
        ('hard', 'Intermediate'),
    )
    LANGUAGE_CHOICES = (
        ('en', 'English'),
        ('fr', 'French'),
        ('es', 'Spanish'),
        ('ja', 'Japanese'),
        ('hi', 'Hindi'),
    )
    word = models.CharField(max_length=255)
    pronounciation = models.CharField(max_length=255, null=True)
    correct_url = models.CharField(max_length=300)
    url1 = models.CharField(max_length=300)
    url2 = models.CharField(max_length=300)
    url3 = models.CharField(max_length=300)
    diff = models.CharField(max_length=6, choices=DIFFICULTY_CHOICES)
    language = models.CharField(max_length=2, choices=LANGUAGE_CHOICES)
    repeated = models.IntegerField(default=0)

    def __str__(self):
        return self.language + ' ' + self.diff + ' ' + str(self.id)