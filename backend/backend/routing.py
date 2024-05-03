from channels.routing import ProtocolTypeRouter, URLRouter
from django.core.asgi import get_asgi_application
import community.routing

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": URLRouter(
        community.routing.websocket_urlpatterns
    ),
})
