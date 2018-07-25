from django.conf.urls import url, include
from rest_framework import routers
from api import views
from django.contrib import admin

router = routers.SimpleRouter()
router.register(r'', views.ContactViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('angular.urls')),
    url(r'^angular/', include('angular.urls')),
    url(r'^api/v1/contact/', include(router.urls)),
]
