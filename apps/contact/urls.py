from django.urls import path

from .views import *


urlpatterns = [
    path('send-email/', EmailAPI.as_view()),
    path('link-social/', LinkSocialList.as_view()),
    
]