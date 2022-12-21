from django.db import models
from collections_app.models import Collection

# Create your models here.
class Card(models.Model):
    word = models.CharField(max_length=255)
    definition = models.CharField(max_length=255)
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)