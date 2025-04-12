from django.test import TestCase
from django.utils.timezone import datetime, make_aware
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse

# from .models import Product, Event

from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from api.models import Project, Specialization, Skill, WorkPosition, PositionApplication

User = get_user_model()


class ProjectTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="test@example.com", password="testpass123"
        )
        self.client.force_authenticate(user=self.user)
        self.specialization = Specialization.objects.create(name="Programista")
        self.skill = Skill.objects.create(name="Python")

    def test_create_project(self):
        url = reverse("project-list")
        data = {"name": "Nowy projekt", "description": "Opis projektu"}
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Project.objects.count(), 1)
        self.assertEqual(Project.objects.get().owner, self.user)

    def test_list_projects(self):
        Project.objects.create(
            name="Projekt testowy", owner=self.user, description="Testowy opis"
        )
        url = reverse("project-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_project_detail(self):
        project = Project.objects.create(
            name="Projekt testowy", owner=self.user, description="Testowy opis"
        )
        url = reverse("project-detail", kwargs={"pk": project.id})
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "Projekt testowy")

    def test_delete_project(self):
        project = Project.objects.create(name="Projekt do usunięcia", owner=self.user)
        url = reverse("project-detail", kwargs={"pk": project.id})
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Project.objects.filter(id=project.id).exists())


class WorkPositionTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="test@example.com", password="testpass123"
        )
        self.client.force_authenticate(user=self.user)
        self.project = Project.objects.create(name="Test Project", owner=self.user)
        self.specialization = Specialization.objects.create(name="Programista")
        self.skill = Skill.objects.create(name="Python")

    def test_create_position(self):
        url = reverse("workposition-list")
        data = {
            "project": self.project.id,
            "title": "Programista Python",
            "specialization": self.specialization.id,
            "people_required_min": 1,
            "people_required_max": 2,
            "description": "Poszukujemy programisty",
            "required_skills": ["Python"], # Frontend knows all the skill types - it should be a list of strings!!
        }
        response = self.client.post(url, data, format="json")
        print(response.data)
        print(response)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        
        self.assertEqual(WorkPosition.objects.count(), 1)
        position = WorkPosition.objects.first()
        self.assertEqual(position.title, "Programista Python")

    def test_list_positions_for_project(self):
        WorkPosition.objects.create(
            project=self.project,
            title="Test Position",
            specialization=self.specialization,
        )
        url = reverse("workposition-list") + f"?project_id={self.project.id}"
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_apply_for_position(self):
        position = WorkPosition.objects.create(
            project=self.project,
            title="Test Position",
            specialization=self.specialization,
        )
        url = reverse("workposition-apply", kwargs={"pk": position.id})
        response = self.client.post(url)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(
            PositionApplication.objects.filter(
                position=position, user=self.user
            ).exists()
        )

    def test_apply_twice_for_same_position(self):
        position = WorkPosition.objects.create(
            project=self.project,
            title="Test Position",
            specialization=self.specialization,
        )
        PositionApplication.objects.create(
            position=position, user=self.user, status="pending"
        )
        url = reverse("workposition-apply", kwargs={"pk": position.id})
        response = self.client.post(url)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class AuthTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="test@example.com", password="testpass123"
        )
        self.project = Project.objects.create(name="Test Project", owner=self.user)

    def test_unauthenticated_access(self):
        self.client.logout()
        url = reverse("project-list")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_csrf_token_endpoint(self):
        url = reverse("get_csrf")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn("message", response.data)


class ModelTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="test@example.com", password="testpass123"
        )
        self.specialization = Specialization.objects.create(name="Programista")
        self.skill = Skill.objects.create(name="Python")

    def test_project_creation(self):
        project = Project.objects.create(name="Test Project", owner=self.user)
        self.assertEqual(str(project), f"Test Project (by {self.user.email})")

    def test_work_position_creation(self):
        project = Project.objects.create(name="Test Project", owner=self.user)
        position = WorkPosition.objects.create(
            project=project, title="Test Position", specialization=self.specialization
        )
        position.required_skills.add(self.skill)
        self.assertEqual(str(position), "Test Position for Test Project")
        self.assertEqual(position.required_skills.count(), 1)

    def test_position_application(self):
        project = Project.objects.create(name="Test Project", owner=self.user)
        position = WorkPosition.objects.create(
            project=project, title="Test Position", specialization=self.specialization
        )
        application = PositionApplication.objects.create(
            position=position, user=self.user
        )
        self.assertEqual(application.status, "pending")
