from django.contrib import admin
from .models import *

# Register your models here.




class TheaterPlaysAdmin(admin.ModelAdmin):
    list_display = ['title', 'image', 'description']

admin.site.register(TheaterPlays, TheaterPlaysAdmin)


class GalleryTheaterPlaysAdmin(admin.ModelAdmin):
    list_display = ['title_gallery', 'theaterplays',]
    search_fields = ['title_gallery', 'theaterplays',]
    list_filter = ['theaterplays',]

admin.site.register(GalleryTheaterPlays, GalleryTheaterPlaysAdmin)


class ImgGalleryAdmin(admin.ModelAdmin):
    list_display = ['image_only', 'gallery',]
    search_fields = ['image_only', 'gallery',]
    list_filter = ['gallery__theaterplays','gallery']

admin.site.register(ImgGallery, ImgGalleryAdmin)


class LinksTheaterPlaysAdmin(admin.ModelAdmin):
    list_display = ['title_link', 'name_theaterplays', 'link',]
    search_fields = ['title_link', 'name_theaterplays']
    list_filter = ['name_theaterplays',]


admin.site.register(LinksTheaterPlays, LinksTheaterPlaysAdmin)