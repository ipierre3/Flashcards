from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CardSerializer
from .models import Card


# Create your views here.
@api_view(['GET', 'POST'])
def cards_list(request, cpk):
    if request.method == 'GET':
        cards = Card.objects.filter(collection_id=cpk)
        serializer = CardSerializer(cards, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CardSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(collection_id=cpk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def card_detail(request, cpk, pk):
    card = get_object_or_404(Card, pk=pk)
    if request.method == 'GET':
        serializer = CardSerializer(card)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CardSerializer(card, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(collection_id=cpk)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        card.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)