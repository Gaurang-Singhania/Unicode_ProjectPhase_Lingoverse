from django.db import models
from users.models import User

# Create your models here.


# Create your models here.
class Community(models.Model):
    name=models.CharField(max_length=100)
    language=models.TextField(max_length=100)
    purpose=models.TextField(max_length=100)
    members=models.IntegerField(default=1)
    image = models.ImageField(upload_to='community_images/', blank=True, null=True)
   
    def __str__(self):
        return self.name
    
class CommunityMembers(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    community=models.ForeignKey(Community,on_delete=models.CASCADE)
    is_Admin=models.BooleanField(default=False)

class ChatRoom(models.Model):
    name=models.CharField(max_length=100)
    creation_date=models.DateTimeField(auto_now_add=True)
    community=models.OneToOneField('Community',on_delete=models.CASCADE)
    

class ChatMessages(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE)
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    chat_room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE, default=None, null=True)    

    

    
# class VideoConferencing(models.Model):
#     #user multi valued?



#class Resources(models.Model):
#class ChatRooms(models.Model):
#class     
            