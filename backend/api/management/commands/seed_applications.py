# api/management/commands/seed_applications.py
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from api.models import Project, WorkPosition, PositionApplication
import random
from faker import Faker

User = get_user_model()
fake = Faker()

class Command(BaseCommand):
    help = 'Generates random position applications for users'

    def handle(self, *args, **options):
        # Pobierz projekty 1-6
        projects = Project.objects.filter(id__in=range(1, 7))
        if not projects.exists():
            self.stdout.write(self.style.ERROR('No projects found (need projects with IDs 1-6)'))
            return

        # Pobierz wszystkich użytkowników
        users = User.objects.all()
        if not users.exists():
            self.stdout.write(self.style.ERROR('No users found'))
            return

        # Pobierz wszystkie stanowiska z tych projektów
        positions = WorkPosition.objects.filter(project__in=projects)
        if not positions.exists():
            self.stdout.write(self.style.ERROR('No work positions found in projects 1-6'))
            return

        # Dla każdego użytkownika utwórz 4-7 aplikacji
        for user in users:
            num_applications = random.randint(4, 7)
            applied_positions = random.sample(list(positions), min(num_applications, len(positions)))
            
            for position in applied_positions:
                status = random.choices(
                    ['pending', 'accepted'],
                    weights=[0.7, 0.3],  # 70% pending, 30% accepted
                    k=1
                )[0]
                
                # Sprawdź czy aplikacja już istnieje
                if not PositionApplication.objects.filter(user=user, position=position).exists():
                    PositionApplication.objects.create(
                        user=user,
                        position=position,
                        status=status
                    )
                    self.stdout.write(
                        self.style.SUCCESS(
                            f'Created application for user {user.id} to position {position.id} ({status})'
                        )
                    )
                else:
                    self.stdout.write(
                        self.style.WARNING(
                            f'Application for user {user.id} to position {position.id} already exists'
                        )
                    )

        self.stdout.write(self.style.SUCCESS('Successfully created position applications'))