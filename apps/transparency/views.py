from django.shortcuts import render
from rest_framework.generics import ListAPIView

from .models import Transparency
from .serializers import TransparencySerializer
from .pagination import SmallSetPagination
# Create your views here.

class TransparencyList(ListAPIView):
    serializer_class = TransparencySerializer
    pagination_class = SmallSetPagination

    def get_queryset(self):
        return Transparency.objects.all()