from django.shortcuts import render
from rest_framework.response import Response
from .models import Magazine
from rest_framework import viewsets, status
from .serializers import MagazineSerializer
from accounts.models import User

# Create your views here.
class MagazineViewSet(viewsets.ModelViewSet):
    queryset = Magazine.objects.all()
    serializer_class = MagazineSerializer

    # 기존 구성된 내용에 오버라이딩 가능
    # get에 매칭, 리스트
    def list(self, request):
        serializer = self.get_serializer(self.queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    # get에 매칭, 상세페이지
    def retrieve(self, request, pk):
        serializer = self.get_serializer(Magazine.objects.get(pk=pk))
        return Response(serializer.data, status=status.HTTP_200_OK)

    # post에 매칭, 게시글 쓰기
    def create(self, request):
        serializer = MagazineSerializer(data=request.data)
        user = request.user
        if serializer.is_valid():
            serializer.save(user=user)
            user.exp = user.exp + 1
            user.save()

            return Response(serializer.data, status=status.HTTP_200_OK)
            
        