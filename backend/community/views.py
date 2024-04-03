from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Community, CommunityMembers
from .permissions import *
from .serializers import *
from django.shortcuts import get_object_or_404
# Create your views here.



class CommunityCreateAPIView(APIView):
    def post(self, request):
        serializer = CommunitySerializers(data=request.data)
        if serializer.is_valid():
            community = serializer.save()
            community.save()
            CommunityMembers.objects.create(user=request.user, community=community, is_Admin=True)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CommunityJoinAPIView(APIView):
    
    def post(self, request, community_id):
        try:
            community = Community.objects.get(id=community_id)
        except Community.DoesNotExist:
            return Response({"message": "Community not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CommunityMembersSerializer(data={'user': request.user.id, 'community': community.id})
        if serializer.is_valid():
            serializer.save()
            community.members+=1
            community.save()
            return Response({"message": "Joined community successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class LeaveCommunityAPIView(APIView):
    def post(self, request, community_id):
        user = request.user
        community = get_object_or_404(Community, id=community_id)
        try:
            community_member = CommunityMembers.objects.get(user=user, community=community)
        except CommunityMembers.DoesNotExist:
            return Response({"message": "User is not a member of this community"}, status=status.HTTP_400_BAD_REQUEST)
      
        community_member.delete()

        return Response({"message": "Left community successfully"}, status=status.HTTP_200_OK)

class CommunityListAPIView(APIView):
    def get(self, request):
        communities = Community.objects.all()
        serializer = CommunitySerializers(communities, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)  
    
class RemoveMemberAPIView(APIView):
    
    def post(self, request, community_id, user_id):
        try:
            membership = CommunityMembers.objects.get(community_id=community_id, user_id=user_id)
            
          
            if membership.is_Admin:
                return Response({"message": "Permission denied: Admin cannot be removed"}, status=status.HTTP_403_FORBIDDEN)
            
            
            if request.user.is_admin:
                membership.delete()
                return Response({"message": "Member removed successfully"}, status=status.HTTP_204_NO_CONTENT)
            else:
                return Response({"message": "Permission denied: You are not an admin"}, status=status.HTTP_403_FORBIDDEN)
        
        except CommunityMembers.DoesNotExist:
            return Response({"message": "Membership not found"}, status=status.HTTP_404_NOT_FOUND)    
        
class DeleteCommunityAPIView(APIView):
    
    def delete(self, request, community_id):
        try:

            community = Community.objects.get(id=community_id)
           
            if CommunityMembers.objects.filter(community=community, user=request.user, is_Admin=True).exists():
            
                community.delete()
                return Response({"message": "Community deleted successfully"}, status=status.HTTP_204_NO_CONTENT)
            else:
                
                return Response({"message": "Permission denied: You are not the admin of this community"}, status=status.HTTP_403_FORBIDDEN)
        except Community.DoesNotExist:
            return Response({"message": "Community not found"}, status=status.HTTP_404_NOT_FOUND)
       

# class RemoveUserFromCommunityAPIView(APIView):
#     permission_classes = [IsCommunityAdmin]

#     def get_community(self, community_id):
#         return Community.objects.get(id=community_id)

#     def post(self, request, community_id):
#         community = self.get_community(community_id)
#         user_id = request.data.get('user_id')

#         try:
#             member = CommunityMember.objects.get(community=community, user_id=user_id)
#             member.delete()
#             return Response({"message": "User removed from the community"}, status=status.HTTP_204_NO_CONTENT)
#         except CommunityMember.DoesNotExist:
#             return Response({"message": "User not found in the community"}, status=status.HTTP_404_NOT_FOUND)      
    