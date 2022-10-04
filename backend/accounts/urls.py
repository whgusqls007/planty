from django.urls import path
from .views import ProfileViewSet, DescriptionViewSet, FollowViewSet, UserCommentViewSet, UserLikeViewSet, UsernameCheckViewSet, EmailCheckViewSet, MyPageViewSet


urlpatterns = [
    path('profile/<username>/', ProfileViewSet.as_view({'get': 'profile'})),
    path('usernamecheck/', UsernameCheckViewSet.as_view({'post': 'check'})),
    path('emailcheck/', EmailCheckViewSet.as_view({'post': 'check'})),
    path('description/', DescriptionViewSet.as_view({'patch' : 'update_description'})),
    path('follow/<username>/', FollowViewSet.as_view({'post': 'follow'})),
    path('mypageuserinfo/', MyPageViewSet.as_view({'get': 'userinfo'})),
    path('user/comments/', UserCommentViewSet.as_view({'get': 'user_comments'})),
    path('user/likes/', UserLikeViewSet.as_view({'get': 'user_likes'})),
    # path('mypageuserinfo/<int:pk>/', MyPageViewSet.as_view({'get': 'userinfo'})),
    # path('mypageuserinfo/<int:pk>/', MyPageViewSet.as_view({'get': 'userinfo'})),
]