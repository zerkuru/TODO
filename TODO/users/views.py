from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from .models import User, Project, ToDo
from .serializers import UserModelSerializer, ProjectModelSerializer, ToDoModelSerializer
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response


class UserModelViewSet(APIView):
    renderer_classes = [JSONRenderer]
    def get(self, request, format=None):
        articles = User.objects.all()
        serializer = UserModelSerializer(User, many=True)
        return Response(serializer.data)

class ProjectModelViewSet(APIView):
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        articles = Project.objects.all()
        serializer = UserModelSerializer(Project, many=True)
        return Response(serializer.data)

class ToDoModelViewSet(ModelViewSet):
    renderer_classes = [JSONRenderer]

    def get(self, request, format=None):
        articles = ToDo.objects.all()
        serializer = ToDoModelSerializer(ToDo, many=True)
        return Response(serializer.data)



# Create your views here.
