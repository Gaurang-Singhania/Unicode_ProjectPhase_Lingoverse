from django.contrib import admin
from .models import *

class CommunityAdmin(admin.ModelAdmin):
    list_display=['id','name','language','purpose','members']

class CommunityMemberAdmin(admin.ModelAdmin):
    list_display=['user','community','is_Admin']

class ChatRoomAdmin(admin.ModelAdmin):
    list_display= ['name','creation_date','community']   
admin.site.register(Community,CommunityAdmin)
admin.site.register(CommunityMembers,CommunityMemberAdmin)  
admin.site.register(ChatRoom,ChatRoomAdmin )



# Register your models here.
