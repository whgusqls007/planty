from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import MagazineLikeViewSet, MagazineCommentViewSet, MainMagazineViewSet


app_name = 'magazines'

router = DefaultRouter()
router.register(r"", views.MagazineViewSet, basename="")

urlpatterns = [
    path('main/', MainMagazineViewSet.as_view({'get': 'list'})),
    path('<int:magazine_pk>/like/', MagazineLikeViewSet.as_view({'post': 'like'})),
    path('<int:magazine_pk>/comment/', MagazineCommentViewSet.as_view({'post': 'create'})),
    path('<int:magazine_pk>/comment/<int:comment_pk>/', MagazineCommentViewSet.as_view({'put': 'update', 'delete':'destroy'})),
    path("", include(router.urls)),
    ]