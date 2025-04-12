import json
import os

from django.core.management.base import BaseCommand, CommandError
from api.models import Specialization, Skill


class Command(BaseCommand):
    help = "Load specializations and skills from a JSON file"

    def add_arguments(self, parser):
        parser.add_argument('json_path', type=str, help='Path to the JSON file with SPECIALIZATIONS and SKILLS')

    def handle(self, *args, **options):
        json_path = options['json_path']
        
        if not os.path.exists(json_path):
            raise CommandError(f"File does not exist: {json_path}")
        
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        specializations = data.get("SPECIALIZATIONS", [])
        skills = data.get("SKILLS", [])

        self.stdout.write("Loading Specializations...")
        for item in specializations:
            spec, created = Specialization.objects.get_or_create(name=item['name'])
            if created:
                self.stdout.write(f"  ✅ Created: {spec.name}")
            else:
                self.stdout.write(f"  ⚠️ Already exists: {spec.name}")

        self.stdout.write("Loading Skills...")
        for item in skills:
            skill, created = Skill.objects.get_or_create(name=item['name'])
            if created:
                self.stdout.write(f"  ✅ Created: {skill.name}")
            else:
                self.stdout.write(f"  ⚠️ Already exists: {skill.name}")

        self.stdout.write(self.style.SUCCESS('✔️  Done loading specializations and skills.'))
