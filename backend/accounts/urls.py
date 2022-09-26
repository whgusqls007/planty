from django.urls import path, include
from .views import FollowViewSet, UsernameCheckViewSet, EmailCheckViewSet

urlpatterns = [
    path('<int:pk>/follow/', FollowViewSet.as_view({'post': 'follow'})),
    path('usernamecheck/', UsernameCheckViewSet.as_view({'post': 'check'})),
    path('emailcheck/', EmailCheckViewSet.as_view({'post': 'check'})),

]