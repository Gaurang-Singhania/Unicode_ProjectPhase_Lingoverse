from django.contrib import admin
from .models import User
# Register your models here.


class UsersAdmin(admin.ModelAdmin):
    list_display = ['email', 'name']

admin.site.register(User, UsersAdmin)