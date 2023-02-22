from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


class UserModelViewSet(APIView):
    renderer_classes = [JSONRenderer]
    def get(self, request, format=None):
        articles = User.objects.all()
        serializer = UserModelSerializer(User, many=True)
        return Response(serializer.data)




# Create your views here.
