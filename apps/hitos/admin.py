from django.contrib import admin
from .models import Milestones, GalleryMilestones, ImgGalleryMilestones, LinksMilestones

# Register your models here.


class MilestonesAdmin(admin.ModelAdmin):
    list_display = ['title', 'image', 'description']

admin.site.register(Milestones, MilestonesAdmin)


class GalleryMilestonesPlaysAdmin(admin.ModelAdmin):
    list_display = ['title_gallery', 'milestones',]
    search_fields = ['title_gallery', 'milestones',]
    list_filter = ['milestones',]

admin.site.register(GalleryMilestones, GalleryMilestonesPlaysAdmin)


class ImgGalleryMilestonesAdmin(admin.ModelAdmin):
    list_display = ['image_only', 'gallery',]
    search_fields = ['image_only', 'gallery',]
    list_filter = ['gallery__milestones','gallery']

admin.site.register(ImgGalleryMilestones, ImgGalleryMilestonesAdmin)


class LinksMilestonesAdmin(admin.ModelAdmin):
    list_display = ['title_link', 'name_milestones', 'link',]
    search_fields = ['title_link', 'name_milestones']
    list_filter = ['name_milestones',]


admin.site.register(LinksMilestones, LinksMilestonesAdmin)