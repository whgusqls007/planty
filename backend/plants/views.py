from django.shortcuts import render
from rest_framework.response import Response
from .models import Plant
from rest_framework import viewsets, status
from .serializers import PlantDictSerializer

# Create your views here.
class PlantDictViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Plant.objects.all()
    serializer_class = PlantDictSerializer