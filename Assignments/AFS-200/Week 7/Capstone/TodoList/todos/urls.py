from django.urls import path

from . import views

urlpatterns = [
    path('<int:id>', views.detail, name="detail"),
    path('locations', views.locations_list, name="locations"),
    path ('new', views.new, name="new"),
]
