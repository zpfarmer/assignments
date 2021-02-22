from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def location1(request):
    return render(request, 'location1.html')

def location2(request):
    return render(request, 'location2.html')

def location3(request):
    return render(request, 'location3.html')

def covid(request):
    return render(request, 'covid.html')

