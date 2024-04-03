from rest_framework import serializers
from .models import *

class QuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'


class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['level', 'user', 'score']


class QuestionsQuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionsQuizRelation
        fields = '__all__'