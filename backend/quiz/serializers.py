from rest_framework import serializers
from .models import *

# class QuestionsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Questions
#         fields = '__all__'


class WordQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WordQuestion
        fields = ['id', 'alt1', 'alt2', 'alt3', 'correct_alt', 'pronounciation', 'word']

class ImageQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageQuestion
        fields = ['id', 'url1', 'url2', 'url3', 'correct_url', 'word', 'pronounciation']

# class QuestionsQuizSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = QuestionsQuizRelation
#         fields = '__all__'