from django.contrib import admin
from django.urls import path
from .views import *

urlpatterns = [
    path('questions', FetchQuestions.as_view(), name="get_ques"),
]