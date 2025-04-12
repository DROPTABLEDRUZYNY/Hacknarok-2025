from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from faker import Faker
import random
from api.models import Specialization, Skill

User = get_user_model()

class Command(BaseCommand):
    help = 'Generates 12 dummy users with sample data including specializations and skills'

    def handle(self, *args, **options):
        fake = Faker('pl_PL')
        
        # Pobierz istniejące specjalizacje i umiejętności z bazy
        existing_specializations = list(Specialization.objects.all())
        existing_skills = list(Skill.objects.all())
        
        if not existing_specializations:
            self.stdout.write(self.style.ERROR('No specializations found in database!'))
            return
            
        if not existing_skills:
            self.stdout.write(self.style.ERROR('No skills found in database!'))
            return

        # Tworzymy 12 użytkowników (pomijając istniejących 3)
        for i in range(4, 16):
            first_name = fake.first_name()
            last_name = fake.last_name()
            email = f"{first_name.lower()}.{last_name.lower()}@example.com"
            
            user = User.objects.create(
                email=email,
                first_name=first_name,
                last_name=last_name,
                bio=fake.text(max_nb_chars=200),
                project1=f"Projekt {fake.word()}",
                project2=f"Projekt {fake.word()}",
                project3=f"Projekt {fake.word()}",
                experience=random.randint(100, 5000),
                level=random.randint(1, 10),
                is_active=True
            )
            
            # Dodaj specjalizacje (1-3 na użytkownika)
            specs_to_add = random.sample(
                existing_specializations, 
                k=random.randint(1, min(3, len(existing_specializations)))
            )
            user.specialization.add(*specs_to_add)
            
            # Dodaj umiejętności (3-6 na użytkownika)
            skills_to_add = random.sample(
                existing_skills,
                k=random.randint(3, min(6, len(existing_skills)))
            )
            user.skills.add(*skills_to_add)
            
            self.stdout.write(self.style.SUCCESS(f'Created user {i}: {email}'))
        
        # Dodaj specjalizacje do istniejących użytkowników 1-3
        for user_id in [1, 2, 3]:
            try:
                user = User.objects.get(id=user_id)
                specs_to_add = random.sample(
                    existing_specializations,
                    k=random.randint(1, min(3, len(existing_specializations)))
                )
                user.specialization.add(*specs_to_add)
                
                skills_to_add = random.sample(
                    existing_skills,
                    k=random.randint(3, min(6, len(existing_skills)))
                )
                user.skills.add(*skills_to_add)
                
                self.stdout.write(self.style.SUCCESS(f'Updated user {user_id} with specializations and skills'))
            except User.DoesNotExist:
                self.stdout.write(self.style.WARNING(f'User with id {user_id} does not exist'))
        
        self.stdout.write(self.style.SUCCESS('Successfully created/updated users with specializations and skills'))