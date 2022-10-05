from django.shortcuts import render, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework import viewsets, status
from rest_framework.response import Response
from plants.models import Plant, PlantKeyword
from plants.serializers import PlantListSerializer
from mygardens.models import MyGarden
from recommendations.models import UserKeywordCount
from django.forms.models import model_to_dict
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
import random

from core.utils import get_recommendation_top_percent

'''
[RecommendViewSet 로직]
1. User 정보를 활용하여 UserKeywordCount에 접근한다
2. 가장 높은 값을 가진 키워드를 찾고
  1) 해당 키워드 값을 가진 식물을 찾는다.
  2) 2-1에서 찾은 식물 개수가 16개가 넘지 않는다면, 두 번째로 높은 값을 가진 값을 찾아 2-1을 실행한다
  3) n개의 키워드를 통해서 16개 이상의 식물을 찾는다
3. 찾은 식물의 개수가 16개를 초과한다면 랜덤으로 16개를 선택, 그렇지 않다면 16개 모두 PlantSerializer를 통해 반환한다
'''


class RecommendViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Plant.objects.all()
    serializer_class = PlantListSerializer

    def list(self, request):
        # 유저 정보
        user = request.user
        # 해당 유저의 선호 키워드 데이터 가져오기
        user_keywords = UserKeywordCount.objects.get(user_id=user.pk)
        # 정렬, 순회하기 좋게 딕셔너리로 변환
        dic_user_keywords = model_to_dict(user_keywords)
        # 선호도 높은 순으로 키워드 정렬
        sorted_user_keywords = [
            [key_name, cnt_value] for key_name, cnt_value in sorted(dic_user_keywords.items(), key=lambda item: -item[1])
        ]
        # 추천할 식물들을 담을 셋(중복 방지)
        plants_to_recommend = set()
        # 모델 간 컬럼명 차이를 고려해 컬럼명 및 조건 딕셔너리
        plant_columns = {
            'beginner': ['manage_level', '초보자'],
            'unscented': ['smell', '거의 없음'],
            'hydroponics': ['hydroponics', '수경형'],
            'low_growth_demand': ['manage_demand', '낮음'],
            'low_light_demand': ['light_demand', '낮은'],
            'low_temp': ['growth_temp', '16'],
        }
        # 선호도 높은 순서대로 키워드 순회
        for keyword in sorted_user_keywords:
            # 추천할 식물이 16개 이상 모이면 종료
            if len(plants_to_recommend) >= 16:
                break
            # 컬럼이 user/id가 아니라면
            if keyword[0] != 'user_id' and keyword[0] != 'id':
                # Plant 테이블 순회
                try:
                    column_name = plant_columns[keyword[0]][0]
                    value = plant_columns[keyword[0]][1]
                    candinates = Plant.objects.filter(**{column_name: value})
                # PlantKeyword 테이블 순회
                except:
                    column_name = keyword[0]
                    candinates = PlantKeyword.objects.filter(**{column_name: 1})
                # 유저한테 없는 식물인지 확인
                for candinate in candinates:
                    try:
                        MyGarden.objects.get(user=user, plant_id=candinate.pk)
                    except:
                        plants_to_recommend.add(candinate.pk)
        # 최종 16개의 식물만 고르기
        final_recommendations = random.sample(plants_to_recommend, 16)
        # 16개의 식물 쿼리셋
        recommend_queryset = Plant.objects.filter(pk__in=final_recommendations)
        # 직렬화
        serializer = PlantListSerializer(recommend_queryset, many=True)

        return Response(serializer.data)


class KeywordViewSet(viewsets.ViewSet):


    @swagger_auto_schema(
        operation_summary='선택한 키워드에 해당하는 식물 정보만 보여주기',
        operation_description='선택한 키워드에 해당하는 식물 중 랜덤한 12개의 정보를 반환합니다.',
        manual_parameters=[
            openapi.Parameter(
                'keyword',
                openapi.IN_QUERY,
                description="""1: 물을 자주 주는
                2: 물을 가끔 주는
                3: 습한 곳에서도 잘 자라는
                4: 선물하기 좋은
                5: 공기 정화용
                6: 초보자가 키우기 쉬운
                7: 가습 효과가 있는
                """,
                type=openapi.TYPE_INTEGER
            )
        ])
    def list(self, request):
        keyword = int(request.query_params.get('keyword', 0))
        # 물을 자주 주는
        if keyword == 1:
            plants = [plant for plant in Plant.objects.all() if plant.watering >= 2]
            plants = random.sample(plants, 12)
        # 물을 가끔 주는
        elif keyword == 2:
            plants = [plant for plant in Plant.objects.all() if plant.watering <= -2]
            plants = random.sample(plants, 12)
        # 습한 곳에서도 잘 자라는
        elif keyword == 3:
            plants = Plant.objects.filter(humidity="70% 이상").order_by("?")[:12]
        # 선물하기 좋은
        elif keyword == 4:
            plants = PlantKeyword.objects.filter(present_adequacy__gte=1).order_by("?")[:12]
            plants = [plant_keyword.id for plant_keyword in plants]
        # 공기 정화용
        elif keyword == 5:
            plants = PlantKeyword.objects.filter(air_cleaning=1).order_by("?")[:12]
            plants = [plant_keyword.id for plant_keyword in plants]
        # 초보자가 키우기 쉬운
        elif keyword == 6:
            plants = Plant.objects.filter(manage_level="초보자").order_by("?")[:12]
        # 가습 효과가 있는
        elif keyword == 7:
            plants = PlantKeyword.objects.filter(humidify=1).order_by("?")[:12]
            plants = [plant_keyword.id for plant_keyword in plants]
        
        
        serializer = PlantListSerializer(plants, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class UserRecommendViewSet(viewsets.ViewSet):
    def list(self, request):
        user = request.user
        if user.pk:
            recommends = get_recommendation_top_percent(user.pk)
            recommends = [data[1] for data in recommends]
            
            plants = Plant.objects.filter(pk__in=recommends)

            serializers = PlantListSerializer(plants, many=True)

            return Response(serializers.data, status=status.HTTP_200_OK)
        else:
            return Response({'data': 'Please Login'}, status=status.HTTP_401_UNAUTHORIZED)

