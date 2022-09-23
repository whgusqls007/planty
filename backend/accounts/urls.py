from django.urls import path, include
from .views import FollowViewSet

urlpatterns = [path('<int:pk>/follow/', FollowViewSet.as_view({'post': 'follow'}))]