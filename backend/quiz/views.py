from django.shortcuts import render
from rest_framework import viewsets
import csv
import random
from googletrans import Translator
from rest_framework.response import Response
from rest_framework.views import APIView

# Create your views here.

def translate_text(text, target_language_code):
        translator = Translator()
        src = translator.detect(text=text)
        translated = translator.translate(text=text, src=src.lang, dest=target_language_code)
        return translated.text


class FetchQuestions(APIView):
    def get(self, request):
        csv_path = 'C:/Users/kaumu/Desktop/quiz.csv'
        with open(csv_path, 'r', encoding='utf-8-sig') as file:
    
            reader = csv.DictReader(file)
            # data = list(reader)
            
            questions_and_types = [(row['Question'], row['Type']) for row in reader]
            questions, types = zip(*questions_and_types)
            
            random_indices = random.sample(range(len(questions)), 5)
            random_questions = []
            corresponding_types = []
            translated_questions = []
            for i in random_indices:
                random_questions.append(questions[i])
                corresponding_types.append(types[i])
                
        for i, (random_question, question_type) in enumerate(zip(random_questions, corresponding_types), 1):
            print(f'{i}. {question_type} : {random_question}')

        for q in random_questions:
            translated_question = translate_text(q, "it") #get language(code if possible) from requesting user's learning language
            translated_questions.append(translated_question)

        for i, translated_question in enumerate(translated_questions, 1):
            print(f'{i}. {translated_question}')
        return Response({"questions" : translated_questions})
