from rest_framework import viewsets, status
from .models import Garden
from .serializers import GardenSerializer
from rest_framework.response import Response
import boto3
from core.utils import s3_upload_image
from django.conf import settings

class GardenViewSet(viewsets.ModelViewSet):
    queryset = Garden.objects.all()
    serializer_class = GardenSerializer

    # post에 매칭
    def create(self, request):
        # 성목 : 파일 업로드 되는지만 테스트. 수정 필요!!
        serializer = self.get_serializer(self.queryset, many=True)
        file=request.FILES['files']

        file_path = s3_upload_image(file, 'feed/')
        
        return Response(serializer.data, status=status.HTTP_200_OK)
