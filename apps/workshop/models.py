from django.db import models

# Create your models here.
def workshop_directory_path(instance, filename):
    return 'workshop/{0}/{1}'.format(instance.category, filename)

class CategoryWorkshop(models.Model):

    class Meta:
        verbose_name = 'Categoria Taller'


    category_workshop = models.CharField(max_length=200, unique=True, verbose_name='Categoria Talleres')
    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.id}-{self.category_workshop}"
    

class Workshop(models.Model):
    class Meta:
        verbose_name = 'Taller'
        verbose_name_plural = 'Talleres'
        

    tittle = models.CharField(max_length=200, verbose_name='Titulo taller')
    category = models.ForeignKey(CategoryWorkshop, on_delete=models.CASCADE)
    image_workshop = models.ImageField(upload_to=workshop_directory_path, verbose_name='Imagen')
    slug = models.SlugField(unique=True)
    facilitator_name = models.CharField(max_length=100, verbose_name='Nombre tallerista')
    facilitator_link = models.URLField(max_length=255, blank=True, null=True, verbose_name='Link')
    description = models.TextField(blank=True, null=True, verbose_name='Descripción')
    schedules = models.TextField(blank=True, null=True, verbose_name='Horarios')
    price = models.CharField(max_length=100, verbose_name='Valores')

    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    def __str__(self):
        return f"{self.tittle} - {self.category}-{self.category.id}"
    
    def get_image_workshop(self):
        if self.image_workshop:
            return self.image_workshop.url
        return ''

