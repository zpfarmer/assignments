from datetime import time

from django.db import models

# Create your models here.
class Location(models.Model):
    name = models.CharField(max_length=50)
    town = models.CharField(max_length=50)
    zip_code = models.IntegerField()

    def __str__(self):
        return f"{self.name}: at {self.town} with a zip of {self.zip_code}"

class Todo(models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField()
    start_time = models.TimeField(default=time(9))
    duration = models.IntegerField(default=1)
    town = models.ForeignKey(Location, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.title} at {self.start_time} on {self.date}"