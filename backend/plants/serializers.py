from rest_framework import serializers
from .models import Plant

class PlantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = [
            'id',
            'plant_no',
            'plant_name',
            'img_url'
        ]

class PlantDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = [
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
            'water_cycle_autum',
            'water_cycle_winter',
            'img_url'
            ]