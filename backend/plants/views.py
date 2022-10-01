from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from .models import Plant, PlantKeyword
from rest_framework import viewsets, status, generics, filters
from django.views.generic.edit import FormView
from .serializers import PlantDetailSerializer, PlantListSerializer
from collections import OrderedDict
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import random

class PlantViewSet(viewsets.ReadOnlyModelViewSet):   
    queryset = Plant.objects.all()
    serializer_class = PlantListSerializer

    list_params = [
        openapi.Parameter(
            'limit',
            openapi.IN_QUERY,
            description="Limit",
            type=openapi.TYPE_INTEGER),
        openapi.Parameter(
            'offset',
            openapi.IN_QUERY,
            description="Offset",
            type=openapi.TYPE_INTEGER
        ),
        openapi.Parameter(
            'search',
            openapi.IN_QUERY,
            description="검색 키워드",
            type=openapi.TYPE_STRING
        ),
    ]

    # 모든 식물 전체 보여주기 (id + 국명 + 이미지)
    @swagger_auto_schema(
    operation_summary='식물 목록',
    operation_description='식물 전체 목록',
    manual_parameters=list_params
    )
    def list(self, request):
        queryset = self.get_queryset()
        plant_name = self.request.query_params.get('search')
        limit = int(request.query_params.get('limit', len(queryset)))
        offset = int(request.query_params.get('offset', 0))
        if plant_name:
            plants_list = Plant.objects.filter(plant_name__contains=plant_name)
            serializer = PlantListSerializer(plants_list, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            plants_list = queryset[offset:offset + limit]
            serializer = PlantListSerializer(plants_list, many=True)
            return Response(OrderedDict([
                ('count', len(queryset)),
                ('results', serializer.data)
            ]), status=status.HTTP_200_OK)
            

    # 선택한 식물의 상세 정보 보여주기
    def retrieve(self, request, pk=None):
        plants_list = Plant.objects.all()
        plant = get_object_or_404(plants_list, pk=pk)
        serializer = PlantDetailSerializer(plant)
        return Response(serializer.data, status=status.HTTP_200_OK)


# 메인페이지 반려동물에게 안전한 식물
class PetSafetyViewSet(viewsets.ViewSet):

    def list(self, request):
        id_list = [plant_keyword.pk for plant_keyword in PlantKeyword.objects.filter(pet_safe=1)]
        id_list = random.sample(id_list, 8)
        plants = Plant.objects.filter(pk__in=id_list)
        serializers = PlantListSerializer(plants, many=True)

        return Response(serializers.data, status=status.HTTP_200_OK)
