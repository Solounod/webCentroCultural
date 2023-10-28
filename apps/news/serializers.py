from rest_framework import serializers
from .models import News

class NewsSerializer(serializers.ModelSerializer):
    image_news = serializers.CharField(source='get_image_news')
    video_news = serializers.CharField(source='get_video_news')
    class Meta:
        model = News
        fields = [
            'title',
            'slug',
            'date_creation',
            'head_news',
            'description',
            'image_news',
            'video_news',
            'link_news',
            'datetime_creation',
            'update_datetime',
        ]

