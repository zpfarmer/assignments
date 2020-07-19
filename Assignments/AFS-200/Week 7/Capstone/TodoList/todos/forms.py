from datetime import date

from django.forms import ModelForm, DateInput, TimeInput,TextInput, IntegerField
from django.core.exceptions import ValidationError
from .models import Todo

class TodoForm(ModelForm):
    class Meta:
        model = Todo
        fields = '__all__'
        widgets = {
            'date': DateInput(attrs={"type": "date"}),
            'start': TimeInput(attrs={"type": "time"}),
            'duration': TextInput(attrs={"type": "number", "min":"1", "max": "4"})
        }

    def clean_date(self):
        d = self.cleaned_data.get("date")
        if d < date.today():
            raise ValidationError("Todos cannot be in the past")
        return d
        