from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

app_name = 'recommendations'

router = DefaultRouter()
router.register(r'', views.RecommendViewSet, basename='')
urlpatterns = [
    path('keyword/', views.KeywordViewSet.as_view({'get': 'list'})),
    path('', include(router.urls)),
]
