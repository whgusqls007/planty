from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import DiaryViewSet


app_name = 'mygardens'

router = DefaultRouter()
router.register(r"", views.MyGardenViewSet, basename="")

urlpatterns = [
    path('', include(router.urls)),
    path('<int:my_garden_pk>/diary/', DiaryViewSet.as_view({'post': 'create'})),
    path('<int:my_garden_pk>/diary/<int:diary_pk>/', DiaryViewSet.as_view({'put': 'update', 'delete':'destroy'})),
]