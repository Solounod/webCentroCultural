from rest_framework.views import APIView
from django.conf import settings
from django.core.mail import send_mail, BadHeaderError
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .serializers import EmailSerializer, LinkSocialSerializer
from .models import LinkSocial


# Create your views here.

class EmailAPI(APIView):
    def post(self, request):
        serializer = EmailSerializer(data=request.data)

        if serializer.is_valid():
            subject = serializer.validated_data['subject']
            email = serializer.validated_data['email']
            message = f"Correo electrónico del remitente: {email}\n\n{serializer.validated_data['message']}"
            email_from = settings.EMAIL_HOST_USER
            recipient_list = ["ra.ignacio.j1@gmail.com"]

            try:
            
                send_mail(subject, message, email_from, recipient_list)
                return Response({'msg': 'Correo electrónico enviado correctamente'}, status=200)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class LinkSocialList(ListAPIView):
    serializer_class = LinkSocialSerializer

    def get_queryset(self):
        return LinkSocial.objects.all()