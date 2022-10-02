from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'plants'

router = DefaultRouter()
router.register(r'', views.PlantViewSet, basename='')
urlpatterns = [
    path('petsafety/', views.PetSafetyViewSet.as_view({'get': 'list'})),
    path('popular/', views.PopularViewSet.as_view({'get': 'list'})),
    path('', include(router.urls))
]