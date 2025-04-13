from drf_spectacular.utils import extend_schema, extend_schema_view
from rest_framework.decorators import action
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.generics import RetrieveAPIView, UpdateAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from django.views.decorators.csrf import ensure_csrf_cookie
from django.utils.decorators import method_decorator
from django.views import View

import json
from users.serializers import (
    EmptySerializer,
    UserRegistrationSerializer,
    UserSerializer,
)

from django.http import JsonResponse

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

import logging

logger = logging.getLogger(__name__)

User = get_user_model()


@method_decorator(ensure_csrf_cookie, name="dispatch")
@extend_schema(
    summary="User Login",
    description="Authenticate a user using email and password. Returns a success message and sets session cookies.",
    request={
        "type": "object",
        "properties": {
            "email": {"type": "string", "example": "admin@admin.pl"},
            "password": {"type": "string", "example": "admin"},
        },
    },
    responses={
        200: {"type": "object", "properties": {"message": {"type": "string"}}},
        400: {"type": "object", "properties": {"error": {"type": "string"}}},
    },
)
class LoginView(View):
    def post(self, request):
        data = json.loads(request.body or "{}")
        username = data.get("email")
        password = data.get("password")

        user = authenticate(request, username=username, password=password)

        if user is None:
            logger.warning(f"Invalid login attempt for email: {username}")
            return JsonResponse({"error": "Invalid credentials"}, status=400)

        login(request, user)
        logger.info(f"User logged in successfully: {username}")
        return JsonResponse({"message": "Logged in successfully"})


@extend_schema(
    summary="User Logout",
    description="Logs out the currently authenticated user. Clears session cookies and returns a success message.",
    responses={200: {"type": "object", "properties": {"message": {"type": "string"}}}},
)
class LogoutView(View):
    def post(self, request):
        logger.info(
            f"User logging out: {request.user.email if request.user.is_authenticated else 'Anonymous'}"
        )
        if not request.user.is_authenticated:
            return JsonResponse({"message": "User already logged out"})

        email = request.user.email
        logout(request)
        logger.info(f"Logged out user: {email}")
        return JsonResponse({"message": "Logged out"})


@extend_schema_view(
    list=extend_schema(
        summary="List Users",
        description="Retrieve a list of all registered users. Returns basic user information.",
        responses={200: UserSerializer(many=True)},
    ),
    retrieve=extend_schema(
        summary="Get User Details",
        description="Retrieve detailed information about a specific user by ID.",
        responses={200: UserSerializer},
    ),
)
class UserViewSet(ListModelMixin, RetrieveModelMixin, GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @extend_schema(
        summary="Register New User",
        description="Create a new user account. Requires email, password, and basic user information.",
        request=UserRegistrationSerializer,
        responses={
            201: UserSerializer,
            400: {"type": "object", "properties": {"error": {"type": "string"}}},
        },
    )
    @action(
        detail=False,
        methods=["post"],
        permission_classes=[AllowAny],
        serializer_class=UserRegistrationSerializer,
    )
    def register(self, request):
        if request.user.is_authenticated:
            return JsonResponse(
                {"error": "Authenticated users cannot register new users."},
                status=403,
            )

        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@extend_schema_view(
    get=extend_schema(
        summary="Get Current User",
        description="Retrieve detailed information about the currently authenticated user.",
        responses={200: UserSerializer},
    ),
    put=extend_schema(
        summary="Update Current User",
        description="Update the currently authenticated user's information.",
        request=UserSerializer,
        responses={200: UserSerializer},
    ),
    patch=extend_schema(
        summary="Partial Update Current User",
        description="Partially update the currently authenticated user's information.",
        request=UserSerializer,
        responses={200: UserSerializer},
    ),
)
class RetrieveUpdateCurrentUserView(RetrieveAPIView, UpdateAPIView):
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        return self.request.user
