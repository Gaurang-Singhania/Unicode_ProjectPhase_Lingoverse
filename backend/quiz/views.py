from django.shortcuts import render
from rest_framework import viewsets
import csv
import random
from googletrans import Translator
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *

# Create your views here.

def translate_text(text, target_language_code):
        translator = Translator()
        src = translator.detect(text=text)
        translated = translator.translate(text=text, src=src.lang, dest=target_language_code)
        return translated.text

def get_random_questions(level):
    total_questions = Questions.objects.filter(level=level).count()

    random_indices = random.sample(range(total_questions), min(5, total_questions))

    random_questions = Questions.objects.filter(id__in=random_indices)

    return random_questions

# class FetchQuestions(APIView):
#     def get(self, request):
#         level = request.data.get('level')
#         id = 7 #to be taken from the requesting user
#         random_questions = get_random_records(level)
#         translated_questions = []
#         for q in random_questions:
#             translated_question = translate_text(q.question, "it") #get language(code if possible) from requesting user's learning language
#             translated_questions.append(translated_question)

#         return Response({"questions" : translated_questions})


def get_translated_questions(random_questions):
        translated_questions = []
        for q in random_questions:
            translated_question = translate_text(q.question, "it") #get language(code if possible) from requesting user's learning language
            translated_questions.append(translated_question)

        return translated_questions
    


class createQuiz(APIView):
    def post(self, request):
        level = request.data.get('level')
        id = 7 #to be taken from the requesting user
        random_questions = get_random_questions(level)

        questions = get_translated_questions(random_questions)

        quiz_serializer = QuizSerializer(data=request.data)
        quiz_serializer.is_valid(raise_exception=True)
        quiz = quiz_serializer.save()
        
        for q in random_questions:
            question = Questions.objects.get(question=q.question)
            ques_quiz_data = {
                'quiz' : quiz.quiz_uuid,
                'questions' : question.id
            }
            print(ques_quiz_data)
            ques_quiz_serializer = QuestionsQuizSerializer(data=ques_quiz_data)
            ques_quiz_serializer.is_valid(raise_exception=True)
            ques_quiz_serializer.save()
        return Response({'quiz_uuid': quiz.quiz_uuid, 'questions': questions}, status=201)
    
