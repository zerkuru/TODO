from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import User
from .serializers import UserModelSerializer, UserModelAllSerializer
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import generics


class UserModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]
    def get(self, request, format=None):
        articles = User.objects.all()
        serializer = UserModelSerializer(User, many=True)
        return Response(serializer.data)

class UserListAPIView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelAllSerializer
        return UserModelSerializer



# Create your views here.
