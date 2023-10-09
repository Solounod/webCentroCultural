from django.db import models

# Create your models here.
class LinkSocial(models.Model):
    name = models.CharField(verbose_name="Red social", max_length=200)
    url = models.URLField(verbose_name="Enlace", max_length=200)
    img = models.ImageField(upload_to='media/contact/', verbose_name="Icono link")
    created = models.DateTimeField(verbose_name="Fecha de creación", auto_now_add=True)
    updated = models.DateTimeField(verbose_name="Fecha de edición", auto_now=True)

    class Meta:
        verbose_name= "Enlace"
        verbose_name_plural = "enlaces"
        ordering = ['name']

    def __str__(self):
        return self.name
