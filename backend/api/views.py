from django.contrib.auth import get_user_model
from django.db.migrations import serializer
from rest_framework.response import Response
from rest_framework.decorators import action, api_view
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from drf_spectacular.utils import extend_schema

# from .models import Product
# from .serializers import ProductSerializer
from users.serializers import EmptySerializer

from rest_framework.views import APIView
from rest_framework.mixins import (
    ListModelMixin,
    CreateModelMixin,
    RetrieveModelMixin,
    UpdateModelMixin,
    DestroyModelMixin,
)
from rest_framework.generics import (
    RetrieveAPIView,
    GenericAPIView,
    ListAPIView,
    CreateAPIView,
    UpdateAPIView,
    DestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import GenericViewSet, ModelViewSet, ReadOnlyModelViewSet
from .models import Project, WorkPosition, PositionApplication
from .serializers import PositionApplicationSerializer, ProjectSerializer, WorkPositionCreateSerializer, WorkPositionSerializer


import logging

logger = logging.getLogger(__name__)
User = get_user_model()


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.filter(is_active=True)
    serializer_class = ProjectSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class WorkPositionViewSet(ModelViewSet):
    queryset = WorkPosition.objects.all()
    permission_classes = [IsAuthenticated]

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return WorkPositionCreateSerializer
        return WorkPositionSerializer

    def get_queryset(self):
        queryset = super().get_queryset()
        project_id = self.request.query_params.get('project_id')
        if project_id:
            queryset = queryset.filter(project_id=project_id)
        return queryset

    @action(detail=True, methods=['get'])
    def applications(self, request, pk=None):
        position = self.get_object()
        if position.project.owner != request.user:
            return Response({"error": "You are not the owner of this project"}, status=403)
        
        applications = position.applications.all()
        serializer = PositionApplicationSerializer(applications, many=True)
        return Response(serializer.data)

    @action(detail=True, methods=['post'])
    def apply(self, request, pk=None):
        position = self.get_object()
        application, created = PositionApplication.objects.get_or_create(
            position=position, 
            user=request.user,
            defaults={'status': 'pending'}
        )
        if not created:
            return Response({"error": "Already applied"}, status=400)
        return Response({"status": "Application created"}, status=201)

@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    serializer_class = EmptySerializer

    def get(self, request):
        return Response({"message": "CSRF cookie set"})

class PositionApplicationViewSet(ModelViewSet):
    queryset = PositionApplication.objects.all()
    serializer_class = PositionApplicationSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Filtruj aplikacje dla zalogowanego użytkownika
        return self.queryset.filter(user=self.request.user)

    @action(detail=True, methods=['post'])
    def accept(self, request, pk=None):
        application = self.get_object()
        if application.position.project.owner != request.user:
            return Response({"error": "You are not the owner of this project"}, status=403)
        
        application.status = 'accepted'
        application.save()
        return Response({"status": "Application accepted"})

    @action(detail=True, methods=['post'])
    def reject(self, request, pk=None):
        application = self.get_object()
        if application.position.project.owner != request.user:
            return Response({"error": "You are not the owner of this project"}, status=403)
        
        application.status = 'rejected'
        application.save()
        return Response({"status": "Application rejected"})

