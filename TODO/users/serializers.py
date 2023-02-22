from rest_framework.serializers import HyperlinkedModelSerializer
from .models import User


class UserModelAllSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = 'username, firstname, lastname, email'





