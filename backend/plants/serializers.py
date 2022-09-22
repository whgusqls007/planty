from rest_framework import serializers
from .models import Plant, PlantKeyword

class PlantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = (
            'id',
            'plant_no',
            'plant_name',
            'img_url',
            'manage_level',
        )




class PlantDetailSerializer(serializers.ModelSerializer):

    # 식물키워드 DB가 완성 되면 해당 컬럼도 조회해서 반환해야함
    class PlantKeywordSerializer(serializers.ModelSerializer):
    
        class Meta:
            model = PlantKeyword
            fields = '__all__'

    plant_keywords = PlantKeywordSerializer(read_only=True, many=True)

    class Meta:
        model = Plant
        fields = (
            'id',
            'plant_no',
            'plant_name',
            'classification',
            'pest_info',
            'ecology_code',
            'family_code',
            'fruit_info',
            'growth_width',
            'growth_height',
            'growth_temp',
            'growth_speed',
            'humidity',
            'blooming_season',
            'light_demand',
            'manage_demand',
            'manage_level',
            'posting_place',
            'water_cycle_spring',
            'water_cycle_summer',
            'water_cycle_autumn',
            'water_cycle_winter',
            'img_url',
            'plant_keywords',
        )