from django.db import models
import uuid

# Create your models here.


class Questions(models.Model):
    level_easy = 'easy'
    level_medium = 'medium'
    level_hard = 'hard'
    level_choices = [
        (level_easy, 'easy'),
        (level_medium, 'medium'),
        (level_hard, 'hard')
    ]
    question = models.TextField()
    answer = models.TextField()
    type = models.CharField(max_length=200)
    category = models.CharField(max_length=200)
    level = models.CharField(max_length=10, choices=level_choices)


class Quiz(models.Model):
    quiz_uuid = models.UUIDField(default=uuid.uuid4, auto_created=True, primary_key=True)
    level = models.CharField(max_length=50)
    user = models.ForeignKey('users.User', null=False, blank=False, on_delete=models.CASCADE)
    score = models.IntegerField()
    is_pass = models.BooleanField(default=False)

    class Meta:
        unique_together = ('quiz_uuid', 'user')


class QuestionsQuizRelation(models.Model):
    quiz = models.ForeignKey(Quiz, null=False, blank=False, on_delete=models.CASCADE)
    questions = models.ForeignKey(Questions, null=False, blank=False, on_delete=models.CASCADE)
    