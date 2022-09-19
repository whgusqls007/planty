from rest_framework import serializers
from .models import Plant

class PlantListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = [
            'cntntsno',
            'cntntssj',
        ]

class PlantDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plant
        fields = [
            'cntntsno',
            'cntntssj',
            'clcodenm',
            'dlthtscodenm',
            'eclgycodenm',
            'fmlcodenm',
            'fncltyinfo',
            'growthhginfo',
            'grwhtpcodenm',
            'grwtvecodenm',
            'hdcodenm',
            'ignseasoncodenm',
            'lighttdemanddocodenm',
            'managedemanddocodenm',
            'managelevelcodenm',
            'postngplacecodenm',
            'watercycleautumncodenm',
            'watercyclewintercodenm',
            'watercyclesummercodenm',
            'watercyclesprngcodenm',
            ]