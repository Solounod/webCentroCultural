from rest_framework import serializers
from .models import Transparency

class TransparencySerializer(serializers.ModelSerializer):
    class Meta:
        model = Transparency
        fields = '__all__'
