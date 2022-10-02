from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import DiaryViewSet, MyGardenViewSet, MygardenListViewSet


app_name = 'mygardens'

router = DefaultRouter()
router.register(r"", MyGardenViewSet, basename="")

urlpatterns = [
    path('user/<username>/', MygardenListViewSet.as_view({'get': 'list'})),
    path('<int:my_garden_pk>/diary/', DiaryViewSet.as_view({'post': 'create'})),
    path('<int:my_garden_pk>/diary/<int:diary_pk>/', DiaryViewSet.as_view({'put': 'update', 'delete':'destroy', 'patch':'particial_update'})),
    path('', include(router.urls)),
]