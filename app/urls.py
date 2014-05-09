from django.conf.urls import patterns, include, url

from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'cal_aps.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^$', 'app.views.index', name='index'),

)
