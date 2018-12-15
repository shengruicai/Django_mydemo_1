# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin

# Register your models here.
from django.contrib.auth.models import User
from .models import Publisher


# from ipApp.models import Publisher, Author, Book

class PublisherAdmin(admin.ModelAdmin):
    search_fields = ('IP', 'STATE', 'MODEL', 'USER')  # 根据属性搜索
    list_display = ('IP', 'STATE', 'USER', 'TEL')  # 列表显示的属性
    list_filter = ('STATE',)  # 筛选
    pass


admin.site.register(Publisher, PublisherAdmin)

