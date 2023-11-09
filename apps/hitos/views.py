from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Milestones, GalleryMilestones, ImgGalleryMilestones, LinksMilestones
from .serializers import MilestonesSerializer, GalleryMilestonesSerializer, ImgGalleryMilestonesSerializer, LinksMilestonesSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.
class MilestonesList(ListAPIView):
    serializer_class = MilestonesSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        return Milestones.objects.all()
    

class DetailMilestones(RetrieveAPIView):
    serializer_class = MilestonesSerializer
    queryset = Milestones.objects.filter()
    
class GalleryByMilestonesList(ListAPIView):
    serializer_class = GalleryMilestonesSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        milestones = self.kwargs['id']
        list = GalleryMilestones.objects.filter(milestones__id=milestones)
        return list
    

class ImgGalleryByGalleryMilestones(ListAPIView):
    serializer_class = ImgGalleryMilestonesSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        gallery = self.kwargs['title_gallery']
        list = ImgGalleryMilestones.objects.filter(gallery__title_gallery=gallery)
        return list
    
class LinksMilestonesList(ListAPIView):
    serializer_class = LinksMilestonesSerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        name_milestones = self.kwargs['id']
        list = LinksMilestones.objects.filter(name_milestones__id=name_milestones)
        return list
    

    