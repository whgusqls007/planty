from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'plants'

router = DefaultRouter()
router.register(r"", views.PlantDictViewSet, basename='')
urlpatterns = [path("", include(router.urls))]