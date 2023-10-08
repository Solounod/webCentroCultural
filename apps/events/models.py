from django.db import models

# Create your models here.

class TheaterPlays(models.Model):
    class Meta:
        verbose_name = 'Obra'
        verbose_name_plural = 'Obras'

    title = models.CharField(max_length=200, unique=True, verbose_name='Titulo Obra')
    image = models.ImageField(upload_to='media/obra/', verbose_name='Imagen')
    description = models.TextField(verbose_name='Descripción')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title}"


class GalleryTheaterPlays(models.Model):
    class Meta:
        verbose_name = 'Galeria'
        verbose_name_plural = 'Galerias'

    title_gallery = models.CharField(max_length=200, unique=True ,verbose_name='Titulo galeria')
    theaterplays = models.ForeignKey(TheaterPlays, on_delete=models.CASCADE)

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title_gallery} - {self.theaterplays}"


class ImgGallery(models.Model):
    class Meta:
        verbose_name = 'Imagen galeria'
        verbose_name_plural = 'Imagenes galerias'

    gallery = models.ForeignKey(GalleryTheaterPlays, on_delete=models.CASCADE)
    image_only = models.ImageField(upload_to='media/galeria/', verbose_name='Imagen')
    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.gallery}"


class LinksTheaterPlays(models.Model):
    class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Links'

    title_link = models.CharField(max_length=200, unique=True, verbose_name='Titulo link')
    name_theaterplays = models.ForeignKey(TheaterPlays, on_delete=models.CASCADE)
    link = models.URLField(max_length=255, verbose_name='Link')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title_link}"