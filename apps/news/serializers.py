from rest_framework import serializers
from .models import News

class NewsSerializer(serializers.ModelSerializer):
    image_news = serializers.CharField(source='get_image_news')
    video_news = serializers.CharField(source='get_video_news')
    class Meta:
        model = News
        fields = '__all__'