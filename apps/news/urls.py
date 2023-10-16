from django.urls import path

from .views import *


urlpatterns = [
    path('', NewsListView.as_view()),
    path('<slug>/', DetailNewsView.as_view()),
]