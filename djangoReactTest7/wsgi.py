"""
WSGI config for djangoReactTest7 project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'djangoReactTest7.settings')

application = get_wsgi_application()

app = application


# if os.environ.get('ENV') == 'production':
#     sys.path.append(os.path.dirname(os.path.dirname(__file__)))
