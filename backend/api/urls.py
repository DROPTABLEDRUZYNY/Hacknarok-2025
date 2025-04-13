from django.urls import path, include
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

from api.views import GetCSRFToken, PositionApplicationViewSet

from . import views

router = DefaultRouter()

router.register(r"projects", views.ProjectViewSet)
router.register(r"positions", views.WorkPositionViewSet)
router.register(r"applications", PositionApplicationViewSet, basename="application")

urlpatterns = [
    path("", include(router.urls)),
    # path("random/", views.RandomProductView.as_view(), name="random_product"),
    path("users/", include("users.urls")),
    path("csrf/", GetCSRFToken.as_view(), name="get_csrf"),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path("docs/", SpectacularSwaggerView.as_view(url_name="schema"), name="swagger-ui"),
    path("api-auth/", include("rest_framework.urls")),  # auth ONLY for browsable API
]
