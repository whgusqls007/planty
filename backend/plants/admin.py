from django.contrib import admin
from .models import Plant

class PlantAdmin(admin.ModelAdmin):
    list_display = ('plant_name',)

admin.site.register(Plant, PlantAdmin)