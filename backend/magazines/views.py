from django.shortcuts import render
from rest_framework.response import Response
from .models import Magazine
from rest_framework import viewsets, status
from .serializers import MagazineSerializer

# Create your views here.
class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer

    # 기존 구성된 내용에 오버라이딩 가능
    def list(self, request):
        # get에 매칭, 리스트
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, pk):
        # get에 매칭, 상세페이지
        serializer = self.get_serializer(Magazine.objects.get(pk=pk))
        return Response(serializer.data, status=status.HTTP_200_OK)
