from django.conf.urls import url,include
from django.contrib import admin
from Django_mydemo_1 import studentdb
from .views import *

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    # url(r'^studentdb$',studentdb.studentdb),
    url(r'^studentdb$', studentdb.studentdb1),
    # url(r'^studentdb$', studentdb.studentdb2),
    # url(r'^studentdb$', studentdb.studentdb3),

    url(r'^login_view',loginView.as_view(),name="login_view"),
]