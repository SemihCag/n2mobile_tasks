from django.db import models
from django.contrib.postgres.fields import JSONField

class User(models.Model):
    name = models.CharField(max_length=255)
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    address = models.JSONField()
    phone = models.CharField(max_length=20)
    website = models.URLField()
    company = models.JSONField()

    def __str__(self):
        return self.name
