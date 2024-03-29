"""TODO URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import UserModelViewSet
from ToDoManaging.views import ToDoModelViewSet, ProjectModelViewSet
from rest_framework.authtoken import views
from graphene_django.views import GraphQLView


router = DefaultRouter()
router.register('users', UserModelViewSet, basename="users")
router.register('todos', ToDoModelViewSet, basename="todos")
router.register('projects', ProjectModelViewSet, basename='projects')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token),
    path('api/users/0.1', include('users.urls', namespace='0.1')),
    path('api/users/0.2', include('users.urls', namespace='0.2')),
    path("graphql/", GraphQLView.as_view(graphiql=True)),

]





