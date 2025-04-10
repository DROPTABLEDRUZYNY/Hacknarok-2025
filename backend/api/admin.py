from django.contrib import admin
from .models import Product, Event

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'description')
    search_fields = ('name', 'description')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'latitude', 'longitude', 'date_start', 'date_created')
    search_fields = ('name', 'description')
    list_filter = ('date_start',)
