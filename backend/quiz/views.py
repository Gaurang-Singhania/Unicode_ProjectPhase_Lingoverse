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

def get_random_records():
    total_records = Questions.objects.count()

    random_indices = random.sample(range(total_records), min(5, total_records))

    random_records = Questions.objects.filter(id__in=random_indices)

    return random_records


class FetchQuestions(APIView):
    def get(self, request):
        level = request.data.get('level')
        csv_path = 'C:/Users/kaumu/Desktop/quiz.csv'
        # with open(csv_path, 'r', encoding='utf-8-sig') as file:
    
        #     reader = csv.DictReader(file)
        #     q_ids = []
        #     questions = []
        #     types = []
        #     for row in reader:
        #          if row['Level'].lower() == level:
        #             questions.append(row['Question'])
        #             types.append(row['Type'])
        #             q_ids.append(row['q_id'])
        #     print(q_ids)
        #     random_indices = random.sample(range(len(questions)), 5)
        #     random_questions = []
        #     corresponding_types = []
        #     translated_questions = []
        #     random_q_ids = []
        #     for i in random_indices:
        #         random_questions.append(questions[i])
        #         corresponding_types.append(types[i])
        #         random_q_ids.append(q_ids[i])
        #     print(random_q_ids)

        #     for random_q_id in random_q_ids:
        #         Questions.objects.create(q_id=random_q_id)
                
        # for i, (random_question, question_type) in enumerate(zip(random_questions, corresponding_types), 1):
        #     print(f'{i}. {question_type} : {random_question}')
        random_questions = get_random_records()
        translated_questions = []
        for q in random_questions:
            translated_question = translate_text(q.question, "it") #get language(code if possible) from requesting user's learning language
            translated_questions.append(translated_question)

        # for i, translated_question in enumerate(translated_questions, 1):
        #     print(f'{i}. {translated_question}')
        return Response({"questions" : translated_questions})
