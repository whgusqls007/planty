from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import MagazineLikeView


app_name = 'magazines'

router = DefaultRouter()
router.register(r"", views.MagazineViewSet, basename="")

urlpatterns = [
    path("", include(router.urls)),
    path('<int:pk>/like/', MagazineLikeView.as_view({'post': 'like'})),
    ]
## 추가예정