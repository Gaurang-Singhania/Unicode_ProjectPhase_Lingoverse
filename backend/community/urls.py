from django.contrib import admin
from django.urls import path
from .views import *
urlpatterns = [
    path('add', CommunityCreateAPIView.as_view(), name="add_"),
      path('join/<int:community_id>/', CommunityJoinAPIView.as_view(), name='community-join'),
      path('leave/<int:community_id>/',LeaveCommunityAPIView.as_view(),name='leave'),
       path('view', CommunityListAPIView.as_view(), name='community-list'),
       path('remove/<int:community_id>/<int:user_id>',RemoveMemberAPIView.as_view(), name='remove'),
       path('delete/<int:community_id>', DeleteCommunityAPIView.as_view(), name='delete'),


]