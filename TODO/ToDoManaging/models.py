from django.db import models
from users import models as usermodels

class Project(models.Model):
    project_name = models.CharField(max_length=64)
    reference = models.CharField(max_length=300)
    members = models.ManyToManyField(usermodels.User)


class ToDo(models.Model):
    project = models.ForeignKey(Project, null=True, on_delete=models.SET_NULL)
    text = models.CharField(max_length=300)
    creator = models.ForeignKey(usermodels.User, null=True, on_delete=models.SET_NULL)
    creation_date = models.DateField(auto_now_add=True)
    update = models.DateField(auto_now_add=True)
