from django.contrib import admin
from .models import *

class CommunityAdmin(admin.ModelAdmin):
    list_display=['id','name','language','purpose','members']

class CommunityMemberAdmin(admin.ModelAdmin):
    list_display=['user','community','is_Admin']
admin.site.register(Community,CommunityAdmin)
admin.site.register(CommunityMembers,CommunityMemberAdmin)        

# Register your models here.
