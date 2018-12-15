# coding=UTF-8  这里为方便对中文进行编译
from __future__ import unicode_literals

from django.db import models

# Create your models here.
# -*- coding:utf-8 -*-
from django.db import models


# Create your models here.
class Publisher(models.Model):
    STATE_CHOICES = (
        (u'down', u'设备已关机'),
        (u'up', u'设备开机'),
        (u'avi', u'此IP未分配'),
    )
    MODEL_CHOICES = (
        (u'fwq', u'普通服务器'),
        (u'gmszx', u'高密四子星'),
        (u'ups', u'UPS'),
        (u'ccjd', u'存储节点'),
        (u'others', u'其他'),
    )

    IP = models.CharField(max_length=30, help_text='Example:172.25.0.0', verbose_name='IP地址',
                          unique=True)  # unique=true则此项是全局唯一，不可以重复
    STATE = models.CharField(max_length=30, verbose_name='当前状态', choices=STATE_CHOICES)  # choices是以下拉菜单显示
    MODEL = models.CharField(max_length=30, blank=True, verbose_name='型号',
                             choices=MODEL_CHOICES)  # verbose_name是网页的显示名称
    IDD = models.CharField(max_length=30, blank=True, verbose_name='设备编号')  # blank=true 则可以不填写
    USER = models.CharField(max_length=30, blank=True, verbose_name='设备使用者')
    TEL = models.CharField(max_length=30, verbose_name='联系方式', blank=True)
    LOC = models.CharField(max_length=30, blank=True, verbose_name='设备位置')
    NOTE = models.CharField(max_length=30, verbose_name='备注', blank=True)
    TIME = models.DateTimeField(auto_now_add=True)
    IPMI = models.CharField(max_length=30, help_text='Example:172.25.0.0', verbose_name='IPMI地址', unique=True,
                            blank=True)

    class Meta:
        verbose_name_plural = 'IP查询'  # 这是表的网页显示名称
        verbose_name = 'IP'

class student(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()

