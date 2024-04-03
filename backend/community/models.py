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

    

    
# class VideoConferencing(models.Model):
#     #user multi valued?



#class Resources(models.Model):
#class ChatRooms(models.Model):
#class     
            