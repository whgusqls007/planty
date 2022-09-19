from django.shortcuts import render, get_object_or_404
from rest_framework.response import Response
from .models import Plant
from rest_framework import viewsets, status, generics, filters
from .serializers import PlantDetailSerializer, PlantListSerializer


class PlantViewSet(viewsets.ReadOnlyModelViewSet):   
    queryset = Plant.objects.all()

    # 모든 식물 전체 보여주기 (id + 국명 + 이미지)
    def list(self, request):
        queryset = Plant.objects.all()
        serializer = PlantListSerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # 선택한 식물의 상세 정보 보여주기
    def retrieve(self, request, pk=None):
        queryset = Plant.objects.all()
        plant = get_object_or_404(queryset, pk=pk)
        serializer = PlantDetailSerializer(plant)
        return Response(serializer.data, status=status.HTTP_200_OK)

    queryset = Plant.objects.all()
    serializer_class = PlantDetailSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = 'cntntssj'

'''
    queryset = Plant.objects.all()
    serializer_class = PlantListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['^cntntssj', 'cntntsno']
'''

'''
https://www.django-rest-framework.org/api-guide/filtering/#filtering-against-query-parameters

class PlantSearchList(generics.ListAPIView):

    def get_queryset(self):
        queryset = Plant.objects.all()
        plant_name = self.request.query_params.get('cntntssj')
        if plant_name is not None:
            queryset = queryset.filter(cntntssj=plant_name)
        return queryset
'''