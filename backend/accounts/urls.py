from django.urls import path
from .views import FollowViewSet, UsernameCheckViewSet, EmailCheckViewSet, DescriptionViewSet

urlpatterns = [
    path('<int:pk>/follow/', FollowViewSet.as_view({'post': 'follow'})),
    path('usernamecheck/', UsernameCheckViewSet.as_view({'post': 'check'})),
    path('emailcheck/', EmailCheckViewSet.as_view({'post': 'check'})),
    path('description/', DescriptionViewSet.as_view({'patch' : 'update_description'})),
    # path('<int:pk>/profile/', ProfileViewSet.as_view({'get': 'profile'}))
    # path('user/', ProfileViewSet.as_view({'get': 'profile'}))
]