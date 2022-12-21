from django.db import models

# Create your models here.
class Collection(models.Model):
    title = models.CharField(max_length=255)