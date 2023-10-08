from django.urls import path

from .views import TransparencyList

urlpatterns = [
    path('transparencia/', TransparencyList.as_view()),
    
    
]