from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    # path('questions', FetchQuestions.as_view(), name="get_ques"),
    path('question/', FetchQuestionAPIView.as_view(), name="get-question"),
    path('populate/', PopulateAPIView.as_view(), name="populate-quiz"),
]