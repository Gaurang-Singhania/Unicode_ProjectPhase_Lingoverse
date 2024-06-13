from django.shortcuts import render
from rest_framework import status
# import csv
import random
# from googletrans import Translator
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from quiz.quiz_gen import get_words, translate_into, scrape_images
from .models import *
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import AuthenticationFailed
# Create your views here.

# def translate_text(text, target_language_code):
#         translator = Translator()
#         src = translator.detect(text=text)
#         translated = translator.translate(text=text, src=src.lang, dest=target_language_code)
#         return translated.text

# def get_random_questions(level):
#     total_questions = Questions.objects.filter(level=level).count()

#     random_indices = random.sample(range(total_questions), min(5, total_questions))

#     random_questions = Questions.objects.filter(id__in=random_indices)

#     return random_questions

# class FetchQuestions(APIView):
#     def get(self, request):
#         level = request.data.get('level')
#         id = 7 #to be taken from the requesting user
#         random_questions = get_random_records(level)
#         translated_questions = []
#         for q in random_questions:
#             translated_question = translate_text(q.question, "it") 
#             translated_questions.append(translated_question)

#         return Response({"questions" : translated_questions})


# def get_translated_questions(random_questions):
#         translated_questions = []
#         for q in random_questions:
#             translated_question = translate_text(q.question, "it") #get language(code if possible) from requesting user's learning language
#             translated_questions.append(translated_question)

#         return translated_questions
    


# class createQuiz(APIView):
#     permission_classes = [IsAuthenticated]

#     def post(self, request):
#         level = request.data.get('level')
#         id = request.user.id #to be taken from the requesting user
#         random_questions = get_random_questions(level)

#         questions = get_translated_questions(random_questions)

#         quiz_serializer = QuizSerializer(data=request.data)
#         quiz_serializer.is_valid(raise_exception=True)
#         quiz = quiz_serializer.save()
        
#         for q in random_questions:
#             question = Questions.objects.get(question=q.question)
#             ques_quiz_data = {
#                 'quiz' : quiz.quiz_uuid,
#                 'questions' : question.id
#             }
#             print(ques_quiz_data)
#             ques_quiz_serializer = QuestionsQuizSerializer(data=ques_quiz_data)
#             ques_quiz_serializer.is_valid(raise_exception=True)
#             ques_quiz_serializer.save()
#         return Response({'quiz_uuid': quiz.quiz_uuid, 'questions': questions}, status=201)
    
class FetchQuestionAPIView(APIView):
    def get(self, request):
        difficulty = request.query_params.get('difficulty')
        language = request.query_params.get('language')
        choices = 10*['image_q'] + 15*['word_q']
        choice = random.choice(choices)
        try:
            if choice=='image_q':
                q = ImageQuestion.objects.filter(language=language, diff=difficulty, repeated__lt=3).order_by('?')[0]
                q.repeated+=1
                q.save()
                serializer = ImageQuestionSerializer(q)
                return Response({'type':'image', **serializer.data}, status=status.HTTP_200_OK)
            else:
                q = random.choice(WordQuestion.objects.filter(language=language, diff=difficulty, repeated__lt=3))
                q.repeated+=1                
                q.save()
                serializer = WordQuestionSerializer(q)
                return Response({'type':'word', **serializer.data}, status=status.HTTP_200_OK)
        except IndexError:
            return Response({'error':'You specified wrong difficulty'}, status=status.HTTP_400_BAD_REQUEST)
        

class PopulateAPIView(APIView):
    def post(self, request):
        difficulty = request.data.get('difficulty')
        language = request.data.get('language')

        for i in range(10):
            c, alts = get_words()
            word, pronounciation = translate_into(c, language)
            image_urls = scrape_images(alts)
            url1 = image_urls[0]
            url2 = image_urls[1]
            url3 = image_urls[2]
            correct_url = image_urls[3]
            ImageQuestion.objects.create(word=word,correct_url=correct_url,url1=url1,url2=url2,url3=url3,
                                         diff=difficulty,language=language,pronounciation=pronounciation)
        for i in range(15):
            c, alts = get_words()
            word, pronounciation = translate_into(c, language)
            alt1 = alts[0]
            alt2 = alts[1]
            alt3 = alts[2]
            WordQuestion.objects.create(word=word, alt1=alt1, alt2=alt2, alt3=alt3, pronounciation = pronounciation, 
                                        diff=difficulty, language=language, correct_alt=c)
            
        return Response({'message':f'Successfully Loaded 25 {difficulty} questions for {language} in db!'}, status=status.HTTP_201_CREATED)
    
class AuthCheckView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        user = request.user
        return Response({'username': user.username, 'email': user.email})

class calculateScore(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        score = request.data.get('score')
        # email = request.data['email']
        # user = User.objects.get(email=email)
        user = request.user
        if not user.is_authenticated:
            raise AuthenticationFailed('User is not authenticated')
            
        # print(user)
        if(score > 20):
            if user.rank == 'beginner':
                user.rank = 'intermediate'
            elif user.rank == 'intermediate':
                user.rank = 'expert'
            user.save()

        data = request.data.copy()
        data['user'] = user.id
        serializer = ScoreSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(user.rank)
