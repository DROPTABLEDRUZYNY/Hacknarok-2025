from django.contrib import admin
from .models import Project, Specialization, Skill, WorkPosition, PositionApplication
# from .models import Product, Event

# @admin.register(Product)
# class ProductAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'price', 'description')
#     search_fields = ('name', 'description')

# @admin.register(Event)
# class EventAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'latitude', 'longitude', 'date_start', 'date_created')
#     search_fields = ('name', 'description')
#     list_filter = ('date_start',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'owner', 'is_active', 'created_at')
    search_fields = ('name', 'description')
    list_filter = ('is_active', 'created_at')

@admin.register(Specialization)
class SpecializationAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')
    search_fields = ('name',)

@admin.register(WorkPosition)
class WorkPositionAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'project', 'specialization', 'people_required_min', 'people_required_max')
    search_fields = ('title', 'description')
    list_filter = ('specialization',)

@admin.register(PositionApplication)
class PositionApplicationAdmin(admin.ModelAdmin):
    list_display = ('id', 'position', 'user', 'status', 'applied_at')
    search_fields = ('position__title', 'user__email')
    list_filter = ('status', 'applied_at')