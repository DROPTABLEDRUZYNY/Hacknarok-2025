from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from api.models import (
    Project,
    Specialization,
    Skill,
    WorkPosition,
    PositionApplication
)
from django.utils import timezone
import random

User = get_user_model()

class Command(BaseCommand):
    help = 'Seed example projects with positions for development'

    def handle(self, *args, **options):
        self.stdout.write("Seeding example data...")
        
        # Tworzenie specjalizacji
        specializations = [
            {"name": "Software Developer"},
            {"name": "Biomedical Engineer"},
            {"name": "Mechanical Engineer"},
            {"name": "Materials Scientist"},
            {"name": "Prosthetics Specialist"}
        ]
        
        for spec_data in specializations:
            Specialization.objects.get_or_create(name=spec_data["name"])
        
        # Tworzenie umiejętności
        skills = [
            "Embedded Systems", "C++", "Python", "Microcontrollers",
            "Biomechanics", "CAD", "3D Printing", "Material Science",
            "Prosthetic Design", "Signal Processing", "Machine Learning",
            "Electronics", "Sensors", "Robotics"
        ]
        
        for skill_name in skills:
            Skill.objects.get_or_create(name=skill_name)
        
        # Pobranie istniejących użytkowników
        try:
            user1 = User.objects.get(id=1)
            user2 = User.objects.get(id=2)
            user3 = User.objects.get(id=3)
            all_users = [user1, user2, user3]
        except User.DoesNotExist:
            self.stdout.write(self.style.ERROR("Required users with IDs 1, 2 and 3 do not exist!"))
            return
        
        # Tworzenie projektów z pozycjami
        projects = [
            {
                "name": "Advanced Leg Prosthesis",
                "description": "Development of next-generation smart prosthetic leg with real-time adaptive control and AI-powered movement prediction.",
                "location": "Cracow",
                "positions": [
                    {
                        "title": "Embedded Systems Developer",
                        "specialization": "Software Developer",
                        "skills": ["Embedded Systems", "C++", "Microcontrollers"],
                        "min": 2,
                        "max": 3,
                        "description": "Design and implement firmware for microcontrollers controlling motion, pressure sensors, and wireless communication."
                    },
                    {
                        "title": "Biomechanical Engineer",
                        "specialization": "Biomedical Engineer",
                        "skills": ["Biomechanics", "Prosthetic Design", "CAD"],
                        "min": 1,
                        "max": 2,
                        "description": "Design the mechanical structure and movement mechanisms for the prosthetic leg."
                    }
                ]
            },
            {
                "name": "Bionic Hand Prosthesis",
                "description": "Innovative bionic hand with precise motor control and tactile feedback system.",
                "location": "Warsaw",
                "positions": [
                    {
                        "title": "Mechatronics Engineer",
                        "specialization": "Mechanical Engineer",
                        "skills": ["Robotics", "Electronics", "Sensors"],
                        "min": 1,
                        "max": 1,
                        "description": "Develop the electromechanical systems for finger movement and grip control."
                    },
                    {
                        "title": "Materials Specialist",
                        "specialization": "Materials Scientist",
                        "skills": ["Material Science", "3D Printing"],
                        "min": 1,
                        "max": 1,
                        "description": "Research and select advanced materials for lightweight yet durable construction."
                    }
                ]
            },
            {
                "name": "Neural Interface for Prosthetics",
                "description": "Developing a direct neural interface to control prosthetic limbs using brain signals.",
                "location": "Gdańsk",
                "positions": [
                    {
                        "title": "Signal Processing Engineer",
                        "specialization": "Software Developer",
                        "skills": ["Signal Processing", "Python", "Machine Learning"],
                        "min": 2,
                        "max": 2,
                        "description": "Develop algorithms to interpret neural signals and translate them into prosthetic movements."
                    }
                ]
            }
        ]
        
        # Pobranie wszystkich specjalizacji i umiejętności
        all_specializations = {s.name: s for s in Specialization.objects.all()}
        all_skills = {s.name: s for s in Skill.objects.all()}
        
        for project_data in projects:
            owner = random.choice(all_users)
            project = Project.objects.create(
                name=project_data["name"],
                description=project_data["description"],
                owner=owner,
                location=project_data["location"],
                created_at=timezone.now(),
                is_active=True
            )
            
            for position_data in project_data["positions"]:
                specialization = all_specializations[position_data["specialization"]]
                position = WorkPosition.objects.create(
                    project=project,
                    title=position_data["title"],
                    specialization=specialization,
                    people_required_min=position_data["min"],
                    people_required_max=position_data["max"],
                    description=position_data["description"]
                )
                
                # Dodawanie umiejętności do pozycji
                for skill_name in position_data["skills"]:
                    skill = all_skills[skill_name]
                    position.required_skills.add(skill)
            
            self.stdout.write(f"Created project: {project.name} with {len(project_data['positions'])} positions (Owner: {owner.email})")
        
        self.stdout.write(self.style.SUCCESS("Successfully seeded example data using existing users!"))