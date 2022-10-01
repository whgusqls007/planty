from django.urls import path
from .views import ProfileViewSet, DescriptionViewSet, FollowViewSet, UsernameCheckViewSet, EmailCheckViewSet


urlpatterns = [
    path('profile/<username>/', ProfileViewSet.as_view({'get': 'profile'})),
    path('usernamecheck/', UsernameCheckViewSet.as_view({'post': 'check'})),
    path('emailcheck/', EmailCheckViewSet.as_view({'post': 'check'})),
    path('description/', DescriptionViewSet.as_view({'patch' : 'update_description'})),
    path('<int:pk>/follow/', FollowViewSet.as_view({'post': 'follow'})),
    # path('<int:pk>/profile/', ProfileViewSet.as_view({'get': 'profile'}))
    # path('user/', ProfileViewSet.as_view({'get': 'profile'}))
]