from rest_framework import serializers

# from .models import Product, Event

import logging

logger = logging.getLogger(__name__)

from rest_framework import serializers
from .models import PositionApplication, Project, Specialization, Skill, WorkPosition
from users.models import User


class UserSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name", "avatar"]


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = "__all__"


class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = "__all__"


class WorkPositionSerializer(serializers.ModelSerializer):
    required_skills = SkillSerializer(many=True, read_only=True)
    application_status = serializers.SerializerMethodField()
    
    specialization = serializers.PrimaryKeyRelatedField(
        queryset=Specialization.objects.all(),
        write_only=True  # Tylko do zapisu, do odczytu używamy SpecializationSerializer
    )
    specialization_detail = SpecializationSerializer(source='specialization', read_only=True)
    
    current_interested = serializers.SerializerMethodField()

    def get_current_interested(self, obj):
        return obj.applications.count()
    
    def get_application_status(self, obj):
        user = self.context['request'].user
        application = obj.applications.filter(user=user).first()
        return application.status if application else None
    
    class Meta:
        model = WorkPosition
        fields = [
            "id",
            "project",
            "title",
            "specialization",  # Write (with ID)
            "specialization_detail",  # Read  (full data)
            "required_skills",
            "people_required_min",
            "people_required_max",
            "description",
            "current_interested",
            "application_status"
        ]


class WorkPositionCreateSerializer(serializers.ModelSerializer):
    required_skills = serializers.SlugRelatedField(
        many=True, slug_field="name", queryset=Skill.objects.all(), required=False
    )
    
    class Meta:
        model = WorkPosition
        fields = "__all__"
        extra_kwargs = {"project": {"required": True}}

    def create(self, validated_data):
        skills = validated_data.pop("required_skills", [])
        position = WorkPosition.objects.create(**validated_data)
        position.required_skills.set(skills)
        return position


class ProjectSerializer(serializers.ModelSerializer):
    owner = UserSimpleSerializer(read_only=True)
    positions = WorkPositionSerializer(many=True, read_only=True)
    applications = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = ['id', 'name', 'description', 'image', 'owner', 
                 'created_at', 'is_active', 'location', 
                 'positions', 'applications']
    
    def get_applications(self, obj):
        # Pobierz wszystkie aplikacje dla pozycji w tym projekcie
        applications = PositionApplication.objects.filter(
            position__project=obj
        ).select_related('user', 'position')
        return PositionApplicationSerializer(applications, many=True, context=self.context).data

class PositionApplicationSerializer(serializers.ModelSerializer):
    user = UserSimpleSerializer(read_only=True)
    position = WorkPositionSerializer(read_only=True)
    
    class Meta:
        model = PositionApplication
        fields = ['id', 'user', 'position', 'applied_at', 'status']
        read_only_fields = ['id', 'applied_at']

