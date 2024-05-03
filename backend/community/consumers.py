import json
from channels.generic.websocket import AsyncWebsocketConsumer
from .models import ChatMessages, CommunityMembers


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.chat_room_id = self.scope['url_route']['kwargs']['chat_room_id']
        self.user = self.scope['user']
        if await self.is_community_member():
            await self.channel_layer.group_add(
                self.chat_room_group_name,
                self.channel_name
            )
            await self.accept()
        else:
            await self.close()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard(
            self.chat_room_group_name,
            self.channel_name
        )

    async def receive(self, text_data):
        data = json.loads(text_data)
        sender_id = data['sender_id']
        receiver_id = data['receiver_id']
        content = data['content']

        await self.save_message(sender_id, receiver_id, content)

        await self.channel_layer.group_send(
            self.chat_room_group_name,
            {
                'type': 'chat_message',
                'sender_id': sender_id,
                'receiver_id': receiver_id,
                'content': content
            }
        )

    async def chat_message(self, event):
        await self.send(text_data=json.dumps(event))

    @property
    def chat_room_group_name(self):
        return f'chat_{self.chat_room_id}'

    async def save_message(self, sender_id, receiver_id, content):
        chat_room_id = self.chat_room_id
        chat_message = ChatMessages(sender_id=sender_id, receiver_id=receiver_id, content=content, chat_room_id=chat_room_id)
        await chat_message.save()

    async def is_community_member(self):
        try:
            CommunityMembers.objects.get(user=self.user, community_id=self.chat_room_id)
            return True
        except CommunityMembers.DoesNotExist:
            return False
