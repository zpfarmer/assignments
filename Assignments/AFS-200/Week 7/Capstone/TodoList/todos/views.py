from django.shortcuts import render, get_object_or_404, redirect

from .models import Todo, Location
from .forms import TodoForm
# Create your views here.
def detail(request, id):
    todo = get_object_or_404(Todo, pk=id)
    return render(request, "todos/detail.html", {"todo": todo})

def locations_list(request):
    return render(request, "todos/locations_list.html",
    {"locations": Location.objects.all()})

#TodoForm = modelform_factory(Todo, exclude=[])

def new(request):
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("welcome")
    else:
        form = TodoForm()
        return render(request, "todos/new.html", {"form": form})