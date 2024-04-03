from django.contrib import admin
from .models import *

# Register your models here.


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['question', 'answer', 'level', 'type', 'category']


class QuizAdmin(admin.ModelAdmin):
    list_display = ['quiz_uuid', 'level', 'user', 'score', 'is_pass']
    
class QuestionsQuizRelationAdmin(admin.ModelAdmin):
    list_display = ['quiz', 'questions']


admin.site.register(Questions, QuestionsAdmin)
admin.site.register(Quiz, QuizAdmin)
admin.site.register(QuestionsQuizRelation, QuestionsQuizRelationAdmin)