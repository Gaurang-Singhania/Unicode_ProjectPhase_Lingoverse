from rest_framework import serializers
from .models import *
from .models import ChatRoom

class ChatRoomSerializers(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = ['id', 'name', 'community']

class CommunitySerializers(serializers.ModelSerializer):
    class Meta:
        model=Community
        fields= ['name','language','purpose']

class  CommunityMembersSerializer(serializers.ModelSerializer):
    class Meta:
        model=CommunityMembers
        fields= '__all__'

