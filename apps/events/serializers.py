from rest_framework import serializers
from .models import TheaterPlays, GalleryTheaterPlays, ImgGallery, LinksTheaterPlays

class TheaterPlaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = TheaterPlays
        fields = '__all__'

class GalleryTheaterPlaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryTheaterPlays
        fields = '__all__'

class ImgGallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = ImgGallery
        fields = '__all__'


class LinksTheaterPlaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinksTheaterPlays
        fields = '__all__'
