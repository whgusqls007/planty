from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from .models import Plant
from rest_framework import viewsets, status, generics, filters
from django.views.generic.edit import FormView
from .serializers import PlantDetailSerializer, PlantListSerializer

class PlantViewSet(viewsets.ReadOnlyModelViewSet):   
    queryset = Plant.objects.all()

    # 모든 식물 전체 보여주기 (id + 국명 + 이미지)
    def list(self, request):
        plant_name = self.request.query_params.get('search')
        if plant_name:
            plants_list = Plant.objects.filter(plant_name__contains=plant_name)
        else:
            plants_list = Plant.objects.all()
        serializer = PlantListSerializer(plants_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 선택한 식물의 상세 정보 보여주기
    def retrieve(self, request, pk=None):
        plants_list = Plant.objects.all()
        plant = get_object_or_404(plants_list, pk=pk)
        serializer = PlantDetailSerializer(plant)
        return Response(serializer.data, status=status.HTTP_200_OK)