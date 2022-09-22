from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import MagazineLikeViewSet, MagazineCommentViewSet


app_name = 'magazines'

router = DefaultRouter()
router.register(r"", views.MagazineViewSet, basename="")

urlpatterns = [
    path("", include(router.urls)),
    path('<int:magazine_pk>/like/', MagazineLikeViewSet.as_view({'post': 'like'})),
    path('<int:magazine_pk>/comment/', MagazineCommentViewSet.as_view({'post': 'create'})),
    path('<int:magazine_pk>/comment/<int:comment_pk>/', MagazineCommentViewSet.as_view({'put': 'update', 'delete':'destroy'})),
    ]