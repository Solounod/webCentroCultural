from django.db import models



# Create your models here.

class Milestones(models.Model):
    class Meta:
        verbose_name = 'Hito'
        verbose_name_plural = 'Hitos'
        ordering = ["-datetime_creation"]

    title = models.CharField(max_length=200, unique=True, verbose_name='Titulo hito')
    image = models.ImageField(upload_to='media/hito/', verbose_name='Imagen')
    description = models.TextField(verbose_name='Descripción')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title}"
    

class GalleryMilestones(models.Model):
    class Meta:
        verbose_name = 'Galeria'
        verbose_name_plural = 'Galerias'
        ordering = ["-datetime_creation"]

    title_gallery = models.CharField(max_length=200, unique=True ,verbose_name='Titulo galeria')
    milestones = models.ForeignKey(Milestones, on_delete=models.CASCADE)

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title_gallery} - {self.milestones}"


class ImgGalleryMilestones(models.Model):
    class Meta:
        verbose_name = 'Imagen galeria'
        verbose_name_plural = 'Imagenes galerias'
        ordering = ["-datetime_creation"]

    gallery = models.ForeignKey(GalleryMilestones, on_delete=models.CASCADE)
    image_only = models.ImageField(upload_to='media/galeriahitos/', verbose_name='Imagen')
    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.gallery}"


class LinksMilestones(models.Model):
    class Meta:
        verbose_name = 'Link'
        verbose_name_plural = 'Links'
        ordering = ["-datetime_creation"]

    title_link = models.CharField(max_length=200, unique=True, verbose_name='Titulo link')
    name_milestones = models.ForeignKey(Milestones, on_delete=models.CASCADE)
    link = models.URLField(max_length=255, verbose_name='Link')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.title_link}"