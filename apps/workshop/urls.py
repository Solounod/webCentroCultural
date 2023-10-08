from django.urls import path

from .views import *


urlpatterns = [
    path('categories/',CategoryWorkShopListView.as_view()),
    path('workshops/<category_id>',WorkShopListView.as_view()),
    path('categories/<category_id>/<post_slug>', WorkShopDetailView.as_view()),
]