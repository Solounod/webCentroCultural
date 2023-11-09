from django.urls import path

from .views import *

urlpatterns = [
    path('milestones/', MilestonesList.as_view()),
    path('milestones/<pk>', DetailMilestones.as_view()),
    path('milestones/gallery/<id>/', GalleryByMilestonesList.as_view()),
    path('milestones/img-gallery/<title_gallery>/', ImgGalleryByGalleryMilestones.as_view()),
    path('milestones/links/<id>/', LinksMilestonesList.as_view()),
    
]