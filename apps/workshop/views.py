from django.shortcuts import render, get_list_or_404, get_object_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import CategoryWorkshop, Workshop
from .serializers import CategoryWorkshopSerializer, WorkshopSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.

class CategoryWorkShopListView(APIView):
    def get(self, request, format=None):
        if CategoryWorkshop.objects.all().exists():
            category = CategoryWorkshop.objects.all()
            serializer = CategoryWorkshopSerializer(category, many=True)
            return Response({'category':serializer.data},status=status.HTTP_200_OK)
        
        else:
            return Response({'error': 'No news found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class WorkShopListView(APIView):
    
    def get(self, request, category_id, format=None):
        print(f"ID de la categoría: {id}")
        if Workshop.objects.all().exists():
            category = CategoryWorkshop.objects.get(id=category_id)
            workshop = Workshop.objects.filter(category=category)
            print(f"Número de talleres encontrados: {workshop.count()}")
            serializer = WorkshopSerializer(workshop, many= True)
            return Response({'workshop':serializer.data},status=status.HTTP_200_OK)
        else:
            return Response({'error': 'No news found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class WorkShopDetailView(APIView):
    def get(self, request, category_id, post_slug, format=None):
        category = get_object_or_404(CategoryWorkshop, id=category_id)
        workshop = get_object_or_404(Workshop, slug=post_slug, category=category)
        serializer = WorkshopSerializer(workshop)
        return Response({'workshop': serializer.data}, status=status.HTTP_200_OK)   
    
            




