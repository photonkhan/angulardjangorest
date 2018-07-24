from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include('angular.urls')),
    url(r'^angular/', include('angular.urls')),
    url(r'^api/', include('api.urls')),
]
