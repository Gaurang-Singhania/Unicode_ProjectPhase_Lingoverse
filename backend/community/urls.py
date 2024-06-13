from django.contrib import admin
from django.urls import path
from .views import *
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
urlpatterns = [
    path('add', CommunityCreateAPIView.as_view(), name="add_"),
      path('join/<int:community_id>/', CommunityJoinAPIView.as_view(), name='community-join'),
      path('leave/<int:community_id>/',LeaveCommunityAPIView.as_view(),name='leave'),
       path('view', CommunityListAPIView.as_view(), name='community-list'),
       path('remove/<int:community_id>/<int:user_id>',RemoveMemberAPIView.as_view(), name='remove'),
       path('delete/<int:community_id>', DeleteCommunityAPIView.as_view(), name='delete'),
        path('redirect/', views.chat_room_redirect, name='chat_room_redirect'),
       path('<int:chat_room_id>/', views.chat_room_view, name='chat_room'),
       path('api/token/',TokenObtainPairView.as_view(),name='token_obtain_pair'),
      path('api/token/refresh/',TokenRefreshView.as_view(),name='token_refresh'),


]