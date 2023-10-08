from django.urls import path

from .views import *

urlpatterns = [
    path('theaterplays/', TheaterPlaysList.as_view()),
    path('theaterplays/<pk>', DetailTheaterPLay.as_view()),
    path('theaterplays/gallery/<id>/', GalleryByTheaterPlaysList.as_view()),
    path('theaterplays/img-gallery/<title_gallery>/', ImgGalleryByGalleryTheater.as_view()),
    path('theaterplays/links/<id>/', LinksTheaterPlaysList.as_view()),
    
]