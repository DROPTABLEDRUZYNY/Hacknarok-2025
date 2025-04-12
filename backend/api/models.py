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
        return f"{self.name} (by {self.owner.email})"

class Specialization(models.Model):
    """Main specialisation"""
    name = models.CharField(max_length=100)
    
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
