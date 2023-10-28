from django.db import models

# Create your models here.
def news_directory_path(instance, filename):
    return 'news/{0}/{1}'.format(instance.title, filename)


class News(models.Model):
    title = models.CharField(max_length=200, verbose_name='Titulo')
    slug = models.SlugField(unique=True)
    date_creation = models.DateField(auto_now_add=False, auto_now=True, verbose_name='Fecha noticia')
    head_news = models.TextField(default='',verbose_name='Encabezado')
    description = models.TextField(verbose_name='Descripción')
    image_news = models.ImageField(upload_to=news_directory_path, verbose_name='Imagen')
    video_news = models.FileField(upload_to=news_directory_path, blank=True, null=True, verbose_name='Video')
    link_news = models.URLField(max_length=255, blank=True, null=True, verbose_name='Link')
    datetime_creation = models.DateTimeField(auto_now_add=False, auto_now=True, verbose_name='Fecha creación')
    update_datetime = models.DateTimeField(auto_now_add=True, auto_now=False, verbose_name='Fecha modificación')

    class Meta:
        verbose_name = 'Noticia'
        ordering = ["-datetime_creation"]

    def __str__(self) -> str:
        return f"{self.title}-{self.date_creation}---{self.datetime_creation}"
    
    def get_video_news(self):
        if self.video_news:
            return self.video_news.url
        return ''
    
    def get_image_news(self):
        if self.image_news:
            return self.image_news.url
        return ''
    

 