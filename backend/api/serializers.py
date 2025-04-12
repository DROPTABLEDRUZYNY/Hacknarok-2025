from rest_framework import serializers
# from .models import Product, Event

import logging

logger = logging.getLogger(__name__)

from rest_framework import serializers
from .models import Project, Specialization, Skill, WorkPosition
from users.models import User


class UserSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "email", "first_name", "last_name"]


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
    specialization = SpecializationSerializer(read_only=True)
    current_interested = serializers.SerializerMethodField()

    def get_current_interested(self, obj):
        return obj.applications.count()

    class Meta:
        model = WorkPosition
        fields = "__all__"


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

    class Meta:
        model = Project
        fields = "__all__"
        extra_kwargs = {"positions": {"read_only": True}}

    def create(self, validated_data):
        project = super().create(validated_data)
        return project






# class ProductSerializer(serializers.ModelSerializer):
#     def create(self, validated_data):
#         logger.info(f"Creating new product with data: {validated_data}")
#         return super().create(validated_data)

#     def update(self, instance, validated_data):
#         logger.info(f"Updating product {instance.id} with data: {validated_data}")
#         return super().update(instance, validated_data)

#     class Meta:
#         model = Product
#         fields = ["id", "name", "price", "description"]


# class EventSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Event
#         fields = [
#             "id",
#             "name",
#             "description",
#             "date_created",
#             "date_start",
#             "latitude",
#             "longitude",
#             # "participants",
#         ]

#     def create(self, validated_data):
#         logger.info(f"Creating new event with data: {validated_data}")
#         return super().create(validated_data)

#     def update(self, instance, validated_data):
#         logger.info(f"Updating event {instance.id} with data: {validated_data}")
#         return super().update(instance, validated_data)
