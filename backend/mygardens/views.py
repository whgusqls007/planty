from core.utils import s3_upload_image
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import MyGarden, Diary
from accounts.models import User
from .serializers import MyGardenSerializer, DiarySerializer
from drf_yasg.utils import swagger_auto_schema


# 나의 정원 식물 목록
class MygardenListViewSet(viewsets.ModelViewSet):
    queryset = MyGarden.objects.all()
    serializer_class = MyGardenSerializer

    @swagger_auto_schema(
    operation_summary='나의 정원 반려 식물 목록',
    operation_description='유저 이름으로 데이터 주고 받아야 합니다.')

    # get에 매칭, 리스트, username으로 접근
    def list(self, request, username):
        person = get_object_or_404(User, username=username)
        serializer = self.get_serializer(self.queryset.filter(user=person.id), many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)


class MyGardenViewSet(viewsets.ModelViewSet):
    queryset = MyGarden.objects.all()
    serializer_class = MyGardenSerializer

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
            try:
                file=request.FILES['files']
            except:
                file=''
            file_path = s3_upload_image(file, 'mygardens/')

            serializer.save(user=user, img_url=file_path)

            user.plants_count = user.plants_count + 1
            user.save()

            return Response(serializer.data, status=status.HTTP_200_OK)

    # 테스트용
    # def create(self, request):
    #     serializer = MyGardenSerializer(data=request.data)
    #     user = request.user

    #     if serializer.is_valid(raise_exception=True):
    #         serializer.save(user=user)

    #         user.exp = user.exp + 1
    #         user.articles_count = user.articles_count + 1
    #         user.save()

    #         return Response(serializer.data, status=status.HTTP_201_CREATED)


    # delete에 매칭, 정원 등록 식물 삭제
    def destroy(self, request, mygarden_pk):
        my_garden = get_object_or_404(MyGarden, pk=mygarden_pk)
        user = request.user

        if user == my_garden.user:
            my_garden.delete()

            user.plants_count = user.plants_count - 1
            user.save()
            
            data = {
                'delete': f'{mygarden_pk}번 데이터가 삭제되었습니다.'
            }

            return Response(data, status=status.HTTP_200_OK)


# 식물일기
class DiaryViewSet(viewsets.ModelViewSet):
    queryset = MyGarden.objects.all()
    serializer_class = DiarySerializer

    # post에 매칭, 일기 작성
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

    # put에 매칭, 일기 수정
    def update(self, request, my_garden_pk, diary_pk):
        my_garden = get_object_or_404(MyGarden, pk=my_garden_pk)
        diary = get_object_or_404(Diary, pk=diary_pk)

        if request.user == my_garden.user:
            serializer = DiarySerializer(instance=diary, data=request.data)
            serializer.save()

            diaries = my_garden.diaries.all()
            serializer = DiarySerializer(instance=diaries, many=True)
            
            return Response(serializer.data, status=status.HTTP_200_OK)

    # delete에 매칭, 일기 삭제
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