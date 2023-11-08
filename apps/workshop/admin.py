from django.contrib import admin
from .models import CategoryWorkshop, Workshop

# Register your models here.




class WorkshopAdmin(admin.ModelAdmin):
    list_display = ["tittle", "category", "slug", "facilitator_name",] 
    search_fields = ["tittle", "slug", "facilitator_name",]
    list_filter = ["category"]
    

admin.site.register(Workshop, WorkshopAdmin)


class CategoryWorkshopAdmin(admin.ModelAdmin):
    list_display = ['category_workshop']

admin.site.register(CategoryWorkshop, CategoryWorkshopAdmin)