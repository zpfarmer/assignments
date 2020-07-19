from datetime import datetime
from django.shortcuts import render

from todos.models import Todo

# Create your views here.
def welcome(request):
    return render(request, "website/welcome.html",
                {"todos": Todo.objects.all()})

def date(request):
    return HttpResponse("This page was served at " + str(datetime.now()))

def about(request):
    return HttpResponse("Welcome!")