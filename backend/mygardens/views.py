from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from .models import MyGarden, Diary
from .serializers import MyGardenSerializer, DiarySerializer
from rest_framework.response import Response
import boto3
from core.utils import s3_upload_image

class MyGardenViewSet(viewsets.ModelViewSet):
    queryset = MyGarden.objects.all()
    serializer_class = MyGardenSerializer
    
    # get에 매칭, 리스트
    def list(self, request):
        serializer = self.get_serializer(self.queryset, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


    # get에 매칭, 상세페이지
    def retrieve(self, request, pk):
        serializer = self.get_serializer(MyGarden.objects.get(pk=pk))

        return Response(serializer.data, status=status.HTTP_200_OK)

    
    # post에 매칭
    def create(self, request):
        data = eval(request.data['data'])
        serializer = MyGardenSerializer(data=data)
        user = request.user

        if serializer.is_valid(raise_exception=True):
            # 성목 : 파일 업로드 되는지만 테스트. 수정 필요!!
            try:
                file=request.FILES['files']
            except:
                file=''
            file_path = s3_upload_image(file, 'mygardens/')

            serializer.save(user=user, img_url=file_path)

            user.plants_count = user.plants_count + 1
            user.save()

            return Response(serializer.data, status=status.HTTP_200_OK)


    # delete에 매칭, 게시글 삭제
    def destroy(self, request, pk):
        my_garden = get_object_or_404(MyGarden, pk=pk)
        user = request.user

        if user == my_garden.user:
            my_garden.delete()

            user.plants_count = user.plants_count - 1
            user.save()
            
            data = {
                'delete': f'{pk}번 데이터가 삭제되었습니다.'
            }

            return Response(data, status=status.HTTP_200_OK)


# 식물일기
class DiaryViewSet(viewsets.ModelViewSet):
    queryset = MyGarden.objects.all()
    serializer_class = DiarySerializer

    # post에 매칭, 댓글 작성
    def create(self, request, my_garden_pk):
        my_garden = get_object_or_404(MyGarden, pk=my_garden_pk)
        serializer = DiarySerializer(data=request.data)

        if serializer.is_valid(raise_exception=True):
            serializer.save(my_garden=my_garden)

            my_garden.diaries_count = my_garden.diaries_count + 1
            my_garden.save()
            
            diaries = my_garden.diaries.all()
            serializers = DiarySerializer(instance=diaries, many=True)
            
            return Response(serializers.data, status=status.HTTP_201_CREATED)

    # put에 매칭, 댓글 수정
    def update(self, request, my_garden_pk, diary_pk):
        my_garden = get_object_or_404(MyGarden, pk=my_garden_pk)
        diary = get_object_or_404(Diary, pk=diary_pk)

        if request.user == my_garden.user:
            serializer = DiarySerializer(instance=diary, data=request.data)
            serializer.save()

            diaries = my_garden.diaries.all()
            serializer = DiarySerializer(instance=diaries, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)

    # delete에 매칭, 댓글 삭제
    def destroy(self, request, my_garden_pk, diary_pk):
        my_garden = get_object_or_404(MyGarden, pk=my_garden_pk)
        diary = get_object_or_404(Diary, pk=diary_pk)

        if request.user == my_garden.user:
            diary.delete()
            
            my_garden.diaries_count = my_garden.diaries_count - 1
            my_garden.save()
            
            diaries = my_garden.diaries.all()
            serializer = DiarySerializer(instance=diaries, many=True)

            return Response(serializer.data, status=status.HTTP_200_OK)