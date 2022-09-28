from django.shortcuts import render, get_list_or_404
from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.response import Response
from plants.models import Plant, PlantKeyword
from plants.serializers import PlantListSerializer
from mygardens.models import MyGarden
from mygardens.serializers import MyGardenSerializer
from recommendations.models import UserKeywordCount

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
        User = get_user_model()
        user = User.objects.get(pk=1)
        # my_plants = get_object_or_404(MyGarden, user=user)
        my_plants = MyGarden.objects.filter(user=user)
        serializer = MyGardenSerializer(my_plants, many=True)
        plant_count = {   
            'pet_safe': 0,
            'humidify': 0,
            'pm_cleaning': 0,
            'beginner': 0,
            'unscented': 0,
            'hydroponics': 0,
            'low_growth_demand': 0,
            'low_light_demand': 0,
            'low_temp': 0,
            }
        for my_plant in my_plants:
            plant_data = Plant.objects.get(pk=my_plant.plant_id)
            plant_keyword = PlantKeyword.objects.get(pk=my_plant.plant_id)
            if plant_keyword.pm_cleaning:
                plant_count['pm_cleaning'] += 1
            if plant_keyword.pet_safety == 1:
                plant_count['pet_safe'] += 1
            if plant_keyword.humidify == 1:
                plant_count['humidify'] += 1
            if plant_data.manage_level == '초보자':
                plant_count['beginner'] += 1
            if plant_data.smell == '없음':
                plant_count['unscented'] += 1
            if '낮음' in plant_data.manage_demand:
                plant_count['low_growth_demand'] += 1
            if '낮은' in plant_data.light_demand:
                plant_count['low_light_demand'] += 1
            if '수경형' in plant_data.ecology_code:
                plant_count['hydroponics'] += 1
            if '16' in plant_data.growth_temp:
                plant_count['low_temp'] += 1
        print(f'user id : 1')
        print(plant_count)
        print('-----------------------------------------')

        user_keywords = UserKeywordCount.objects.get(user=user)
        

        return Response(serializer.data)
