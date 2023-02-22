import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from django.contrib.auth.models import User
from .views import ProjectModelViewSet, ToDoModelViewSet
from .models import ToDo, Project

class TestToDoViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/todos/')
        view = ToDoModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestProjectViewSet(TestCase):
    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/projects/')
        view = ProjectModelViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

def test_create_guest(self):
    factory = APIRequestFactory()
    request = factory.post('/api/projects/', {'project_name': 'mypro', 'reference': 'my test pro'}, format='json')
    view = ProjectModelViewSet.as_view({'post': 'create'})
    response = view(request)
    self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

def test_get_detail(self):
    project = Project.objects.create(project_name='Mypro', reference='mytestpro')
    client = APIClient()
    response = client.get(f'/api/projects/{project.id}/')
    self.assertEqual(response.status_code, status.HTTP_200_OK)

class TestToDoViewSet(APITestCase):
    def test_get_list(self):
        response = self.client.get('/api/todos/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

def test_edit_mixer(self):
    todo = mixer.blend(ToDo)
    admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
    self.client.login(text='testtest', creator='admin123456')
    response = self.client.put(f'/api/todos/{todo.id}/', {'text': 'testtest', 'creator': todo.creator.id})
    self.assertEqual(response.status_code, status.HTTP_200_OK)
    todo = ToDo.objects.get(id=todo.id)
    self.assertEqual(todo.text,'testtest')
