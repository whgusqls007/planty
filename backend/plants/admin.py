from django.contrib import admin
from .models import Plant, Plantrecomm

class PlantAdmin(admin.ModelAdmin):
    list_display = ('id', 'plant_no', 'plant_name',)

class PlantrecommAdmin(admin.ModelAdmin):
    list_display = ('plant_no', 'plant_name',)

admin.site.register(Plant, PlantAdmin)
admin.site.register(Plantrecomm, PlantrecommAdmin)