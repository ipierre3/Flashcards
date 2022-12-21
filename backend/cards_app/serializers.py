from rest_framework import serializers
from .models import Card

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ['id', 'word', 'definition']
        optional_fields = [ 'collection']
        extra_kwargs = {
            'collection': {'write_only': True},
        }