from django.contrib import admin
from .models import Transparency

# Register your models here.

class TransparencyAdmin(admin.ModelAdmin):
    list_display = ["title", "link", "file_pdf",]

admin.site.register(Transparency, TransparencyAdmin)