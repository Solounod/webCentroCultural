from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import TheaterPlays, GalleryTheaterPlays, ImgGallery, LinksTheaterPlays
from .serializers import TheaterPlaysSerializer, GalleryTheaterPlaysSerializer, ImgGallerySerializer, LinksTheaterPlaysSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.
class TheaterPlaysList(ListAPIView):
    serializer_class = TheaterPlaysSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        return TheaterPlays.objects.all()
    

class DetailTheaterPLay(RetrieveAPIView):
    serializer_class = TheaterPlaysSerializer
    queryset = TheaterPlays.objects.filter()
    
class GalleryByTheaterPlaysList(ListAPIView):
    serializer_class = GalleryTheaterPlaysSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        theaterplays = self.kwargs['id']
        list = GalleryTheaterPlays.objects.filter(theaterplays__id=theaterplays)
        return list
    

class ImgGalleryByGalleryTheater(ListAPIView):
    serializer_class = ImgGallerySerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        gallery = self.kwargs['title_gallery']
        list = ImgGallery.objects.filter(gallery__title_gallery=gallery)
        return list
    
class LinksTheaterPlaysList(ListAPIView):
    serializer_class = LinksTheaterPlaysSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        name_theaterplays = self.kwargs['id']
        list = LinksTheaterPlays.objects.filter(name_theaterplays__id=name_theaterplays)
        return list
    

    