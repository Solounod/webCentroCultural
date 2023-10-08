from django.db import models

# Create your models here.
class Transparency(models.Model):

    class Meta:
        verbose_name = 'Transparencia'
        verbose_name_plural = 'Transparencias'

    title = models.CharField(max_length=200, unique=True, verbose_name='Titulo')
    description = models.TextField(blank=True, null=True, verbose_name='Descripción')
    link = models.URLField(max_length=255, blank=True, null=True, verbose_name='Link')
    file_pdf = models.FileField(upload_to='media/transparencia/',blank=True, null=True, verbose_name='Archivo')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')
    
    def __str__(self):
        return f"{self.id}-{self.title}"