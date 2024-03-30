from django.contrib import admin
from .models import *

# Register your models here.


class QuestionsAdmin(admin.ModelAdmin):
    list_display = ['question', 'answer', 'level', 'type', 'category']


admin.site.register(Questions, QuestionsAdmin)