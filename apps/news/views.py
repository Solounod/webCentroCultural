from django.shortcuts import render, get_list_or_404

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import News
from .serializers import NewsSerializer
from .pagination import SmallSetPagination, MediumSetPagination, LargeSetPagination

# Create your views here.

class NewsListView(APIView):
    def get(self, request, format=None):
        if News.objects.all().exists():
            news = News.objects.all()

            paginator = SmallSetPagination()
            results = paginator.paginate_queryset(news, request)
            serializer = NewsSerializer(results, many=True)

            return paginator.get_paginated_response({'news':serializer.data})
        else:
            return Response({'error': 'No news found'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
class NewsDetailView(APIView):
    def get(self, request, post_slug, format=None):
        news = get_list_or_404(News, slug=post_slug)
        serializer = NewsSerializer(news)
        return Response({'news':serializer.data}, status=status.HTTP_200_OK)


