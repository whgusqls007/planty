from django.shortcuts import render, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework import viewsets, status
from rest_framework.response import Response
from plants.models import Plant, PlantKeyword
from plants.serializers import PlantListSerializer
from mygardens.models import MyGarden
from mygardens.serializers import MyGardenSerializer
from recommendations.models import UserKeywordCount
from .serializers import UserKeywordCountSerializer
from django.forms.models import model_to_dict
import random


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
        User = get_user_model()
        user = User.objects.get(pk=1)
        # 식물 키워드 카운트 등록 (Table UserKeywordCount)
        try:
            # 이미 UserKeywordCount가 있다면
            keyword_count = UserKeywordCount.objects.get(user_id=user.pk)
        except:
            # UserKeywordCount가 없다면 새로 생성
            keyword_count = UserKeywordCount(user_id=user.pk)
            keyword_count.save()
        # plant_id = serializer.data.plant.id
        plant_id = 2 # 테스트용
        plant_data = Plant.objects.get(pk=plant_id)
        plant_keyword = PlantKeyword.objects.get(pk=plant_id)
        # 식물 키워드 정보 확인
        if plant_keyword.pet_safe == 1:
            keyword_count.pet_safe += 1
            keyword_count.save()
        if plant_keyword.humidify == 1:
            keyword_count.humidify += 1
            keyword_count.save()
        if plant_keyword.pm_cleaning:
            keyword_count.pm_cleaning += 1
            keyword_count.save()
        if plant_keyword.air_cleaning:
            keyword_count.air_cleaning += 1
            keyword_count.save()
        if plant_data.manage_level == '초보자':
            keyword_count.beginner += 1
            keyword_count.save()
        # 식물 기본 정보 확인
        if plant_data.smell == '거의 없음':
            keyword_count.unscented += 1
            keyword_count.save()
        if '낮음' in plant_data.manage_demand:
            keyword_count.low_growth_demand += 1
            keyword_count.save()
        if '낮은' in plant_data.light_demand:
            keyword_count.low_light_demand += 1
            keyword_count.save()
        if '수경형' in plant_data.ecology_code:
            keyword_count.hydroponics += 1
            keyword_count.save()
        if '16' in plant_data.growth_temp:
            keyword_count.low_temp += 1
            keyword_count.save()

        # 해당 유저의 선호 키워드 데이터 가져오기
        user_keywords = UserKeywordCount.objects.get(user_id=user.pk)
        # user_keywords = UserKeywordCount.objects.get(user=user)
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
            if keyword[0] != 'user' and keyword[0] != 'id':
                # Plant 테이블 순회
                try:
                    column_name = plant_columns[keyword[0]]
                    value = plant_columns[keyword[1]]
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

    
    # 선택한 키워드에 해당하는 식물 정보만 보여주기
    def retrieve(self, request, keyword=None):
        plants_list = Plant.objects.all()
        # 키워드 번호별로 확인해야하는 column 정보 + 값
        # index == 키워드 번호 / [column명, 값]
        keywords = []
        column_name = keywords[keyword][0]
        value = keywords[keyword][1]
        plants_list = Plant.objects.filter(**{column_name: value})
        serializer = PlantListSerializer(plants_list, many=True)
        
        return Response(serializer.data, status=status.HTTP_200_OK)