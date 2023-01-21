from django.db import models

class User(models.Model):
    username = models.CharField(max_length=64)
    firstname = models.CharField(max_length=64)
    lastname = models.CharField(max_length=64)
    email = models.EmailField(primary_key=True)


class Project(models.Model):
    project_name = models.CharField(max_length=64)
    reference = models.CharField(max_length=300)
    members = models.ManyToManyField(User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, null=True, on_delete=models.SET_NULL)
    text = models.CharField(max_length=300)
    creator = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)
    creation_date = models.DateField()
    update = models.DateField()
