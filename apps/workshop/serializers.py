from rest_framework import serializers
from .models import CategoryWorkshop, Workshop

class CategoryWorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = CategoryWorkshop
        fields = '__all__'

class WorkshopSerializer(serializers.ModelSerializer):
    category = CategoryWorkshopSerializer()
    image_workshop = serializers.CharField(source='get_image_workshop')
    class Meta:
        model = Workshop
        fields = ('id',
                  'tittle',
                  'category',
                  'image_workshop',
                  'slug',
                  'facilitator_name',
                  'facilitator_link',
                  'description',
                  'schedules',
                  'price',)
