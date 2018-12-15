# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.views.generic import TemplateView,View
from django.contrib.auth import authenticate,login,logout
from django.http import HttpResponseRedirect,JsonResponse
from django.shortcuts import render

# Create your views here.
class loginView(View):
    def get(self,request):
        return render(request,"login.html",{"is_get":True})
    def post(self,request):
        user_name = request.POST.get("username","").replace(' ','')
        user_word = request.POST.get("password","").replace(' ','')
        if user_name and user_word:
            user =authenticate(username = user_name, password = user_word)
            if user is not None:
                login(request,user)
                # try:
                #     if user.post.post_permission == 10:
                #         # return HttpResponseRedirect('/settlement')
                #         return render(request,'loginSuccess.html')
                # except Exception as e:
                #     return HttpResponseRedirect('/')
                # return HttpResponseRedirect('/')
                return render(request, 'loginSuccess.html')
            else:
                return render(request,'login.html',{"msg":"用户名或密码错误"})
        else:
            return render(request,'login.html',{"msg":"用户名或密码不能为空"})

