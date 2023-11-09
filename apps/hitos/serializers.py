from rest_framework import serializers
from .models import Milestones, GalleryMilestones, ImgGalleryMilestones, LinksMilestones
class MilestonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Milestones
        fields = '__all__'

class GalleryMilestonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryMilestones
        fields = '__all__'

class ImgGalleryMilestonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgGalleryMilestones
        fields = '__all__'


class LinksMilestonesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinksMilestones
        fields = '__all__'
