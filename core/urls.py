from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.static import serve


urlpatterns = [
    path("api/news/", include('apps.news.urls')),
    path("api/workshop/", include('apps.workshop.urls')),
    path("api/events/", include('apps.events.urls')),
    path("api/transparencias-proyectos/", include('apps.transparency.urls')),
    path("api/contact/", include('apps.contact.urls')),
    path("api/hitos/", include('apps.hitos.urls')),

    
    path("admin/", admin.site.urls),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*',
                        TemplateView.as_view(template_name='index.html')),
                        re_path(r'^media/(?P<path>.*)$', serve, {
                        'document_root': settings.MEDIA_ROOT,
                        }),]