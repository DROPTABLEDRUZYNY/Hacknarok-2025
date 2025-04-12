from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

class Project(models.Model):
    """Główny model projektu"""
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to="images/project_images/", null=True, blank=True)
    
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='owned_projects')
    created_at = models.DateTimeField(auto_now_add=True)
    
    is_active = models.BooleanField(default=True)
    location = models.CharField(max_length=200, blank=True)
    
    def __str__(self):
        return f"{self.name} (by {self.owner.username})"

class Specialization(models.Model):
    """Main specialisation"""
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50, blank=True)
    
    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class WorkPosition(models.Model):
    """Needed position in project"""
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='positions')
    title = models.CharField(max_length=200)
    specialization = models.ForeignKey(Specialization, on_delete=models.PROTECT)
    required_skills = models.ManyToManyField(Skill, blank=True)
    people_required_min = models.PositiveIntegerField(default=1)
    people_required_max = models.PositiveIntegerField(default=1)
    description = models.TextField(blank=True)
    
    def __str__(self):
        return f"{self.title} for {self.project.name}"

class PositionApplication(models.Model):
    position = models.ForeignKey(WorkPosition, on_delete=models.CASCADE, related_name='applications')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='position_applications')
    applied_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=20, choices=[
        ('pending', 'Pending'),
        ('accepted', 'Accepted'),
        ('rejected', 'Rejected')
    ], default='pending')
    
    class Meta:
        unique_together = ('position', 'user')


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
    description = models.TextField(blank=True)
    # before_image = models.ImageField(
    #     upload_to="images/xxx/",
    #     null=True,
    #     blank=True,
    # )
    
    def __str__(self):
        return f"{self.pk} {self.name}"


class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    latitude = models.FloatField(blank=False, null=False)
    longitude = models.FloatField(blank=False, null=False)

    date_start = models.DateTimeField(blank=False, null=False)
    date_created = models.DateTimeField(blank=False, null=False, auto_now_add=True)

    #is_active = models.BooleanField(default=True)
    # type = models.CharField(max_length=64, choices=TYPE_CHOICES, default="OTHER", blank=False)
    # participants = models.ManyToManyField(User, related_name="events", blank=True)  # Dodanie uczestników

    def __str__(self):
        return f"{self.name} ({self.pk})"
