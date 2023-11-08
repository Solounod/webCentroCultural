from django.contrib import admin
from .models import News
# Register your models here.



class NewAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'date_creation', 'link_news',]
    search_fields = ['title', 'date_creation',]


admin.site.register(News, NewAdmin)