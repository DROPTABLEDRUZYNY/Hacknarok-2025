from rest_framework import serializers
from django.contrib.auth import get_user_model
from api.serializers import SpecializationSerializer, SkillSerializer

import logging

logger = logging.getLogger(__name__)

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    specialization = SpecializationSerializer(many=True, read_only=True)
    skills = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "first_name",
            "last_name",
            "email",
            "avatar",
            "birth_date",
            "project1",
            "project2",
            "project3",
            "experience",
            "level",
            "specialization",  # Serializowane jako lista obiektów z nazwami
            "skills",  # Serializowane jako lista obiektów z nazwami
        ]

    def validate_first_name(self, value):
        return value.lower().capitalize()

    def validate_last_name(self, value):
        return value.lower().capitalize()


class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone_number",
            "birth_date",
            "password",
        ]

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class EmptySerializer(serializers.Serializer):
    pass
