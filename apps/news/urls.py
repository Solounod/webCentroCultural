from django.urls import path

from .views import *


urlpatterns = [
    path('', NewsListView.as_view()),
    path('<post_slug>/', NewsDetailView.as_view()),
]