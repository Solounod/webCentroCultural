import multiprocessing
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

bind = "0.0.0.0:8000"
workers = multiprocessing.cpu_count() * 2 + 1
loglevel = "info"
errorlog = "-"
accesslog = "-"
capture_output = True

# Configuración para manejar archivos estáticos y de medios
from whitenoise import WhiteNoise
from django.core.wsgi import get_wsgi_application

application = get_wsgi_application()
application = WhiteNoise(application, root=os.path.join(BASE_DIR, 'static'))
application.add_files(os.path.join(BASE_DIR, 'media'), prefix='media/')