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



class ScoreSerializer(serializers.ModelSerializer):
    # email = serializers.EmailField(write_only=True)
    class Meta:
        model = Score
        fields = ['user', 'score', 'level']

    def create(self, validated_data):
        # email = validated_data.pop('email')
        level = validated_data['level']
        requestingUser = validated_data['user']

        try:
            user = User.objects.get(email=requestingUser.email)
        except User.DoesNotExist:
            raise serializers.ValidationError(f"User with email {requestingUser.email} does not exist")
        
        score_instance, created = Score.objects.update_or_create(
            user=user, level=level,
            defaults={'score': validated_data['score']}
        )
        
        return score_instance

# class QuestionsQuizSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = QuestionsQuizRelation
#         fields = '__all__'