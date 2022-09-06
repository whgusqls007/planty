from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


app_name = 'magazines'

router = DefaultRouter()
router.register(r"", views.MagazineViewSet, basename="")

urlpatterns = [path("", include(router.urls))]
