from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import FeedLikeViewSet, FeedCommentViewSet


app_name = 'feeds'

router = DefaultRouter()
router.register(r"", views.FeedViewSet, basename="")

urlpatterns = [
    path("", include(router.urls)),
    path('<int:feed_pk>/like/', FeedLikeViewSet.as_view({'post': 'like'})),
    path('<int:feed_pk>/comment/', FeedCommentViewSet.as_view({'post': 'create'})),
    path('<int:feed_pk>/comment/<int:comment_pk>/', FeedCommentViewSet.as_view({'put': 'update', 'delete':'destroy'})),
    ]