from django.db import models

class User(models.Model):
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(primary_key=True)
    is_superuser = models.BooleanField(default=False)
    is_stuff = models.BooleanField(default=False)




