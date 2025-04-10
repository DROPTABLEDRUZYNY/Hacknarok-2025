from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


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
