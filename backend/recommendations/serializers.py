from rest_framework import serializers

from plants.models import Plant
from .models import UserKeywordCount

class UserKeywordCountSerializer(serializers.ModelSerializer):


    class Meta:
        model = UserKeywordCount
        fields = ('__all__')
