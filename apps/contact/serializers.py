from rest_framework import serializers
from .models import LinkSocial

class LinkSocialSerializer(serializers.ModelSerializer):
    class Meta:
        model = LinkSocial
        fields = '__all__'


class EmailSerializer(serializers.Serializer):
    subject = serializers.CharField(max_length=255, required=True)
    email = serializers.EmailField(required=True)
    message = serializers.CharField(required=True)