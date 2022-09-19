from django.urls import path, include
from .views import FollowView

urlpatterns = [path('<int:pk>/follow/', FollowView.as_view({'post': 'follow'}))]