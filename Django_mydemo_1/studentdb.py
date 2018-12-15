# coding: utf-8

from django.http import HttpResponse
from myApp.models import student

# 数据库操作--添加
# def studentdb(request):
#     student1 = student(name='boy1',age=21)
#     student2 = student(name='boy2', age=22)
#     student3 = student(name='boy3', age=23)
#     student4 = student(name='boy4', age=24)
#     student5 = student(name='boy5', age=25)
#     student1.save()
#     student2.save()
#     student3.save()
#     student4.save()
#     student5.save()
#     return HttpResponse("<p>数据添加成功！</p>")

# # 数据库操作--查询所有
def studentdb1(request):
    response = ""
    response1 = ""
    list = student.objects.all()
    for var in list:
        response1 = var.name+" "
        response += response1
    return HttpResponse("<p>"+response+"</p>")

# #数据库操作--按条件查询
def studentdb2(request):
    response1 = student.objects.filter(id  = 1)
    for var in response1:
        response2 = var.name
        response3 = var.age
    return HttpResponse("<p>name :"+response2+"</p><p>"+"age :"+str(response3)+"</p>")

# # 数据库操作--查询指定的数据
# def studentdb3(request):
#     response3 = student.objects.get(id = 1)
#     for var in response3:
#
#     return HttpResponse(response3)

# # 数据库操作--排序查看
# def studentdb4(request):
#     response4 = student.objects.order_by("id")
#     return HttpResponse(response4)

# # 数据库操作--限制返回数量
# def studentdb5(request):
#     response5 = student.objects.order_by('name')[0:2]
#     return HttpResponse(response5)

# # 数据库操作--连锁查看
# def student6(request):
#     response6 = student.objects.filter(name="boy").order_by("id")
#     return HttpResponse(response6)
