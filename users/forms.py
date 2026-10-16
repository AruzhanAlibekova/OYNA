from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import User


class RegisterForm(UserCreationForm):

    first_name = forms.CharField(
        label='Имя',
        max_length=100
    )

    last_name = forms.CharField(
        label='Фамилия',
        max_length=100
    )

    role = forms.ChoiceField(
        label='Кто вы?',
        choices=[
            (User.Role.STUDENT, 'Студент'),
            (User.Role.TEACHER, 'Преподаватель'),
        ]
    )

    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'role',
            'password1',
            'password2',
        ]

        labels = {
            'username': 'Логин',
        }

    def save(self, commit=True):
        user = super().save(commit=False)

        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.role = self.cleaned_data['role']

        if user.role == User.Role.TEACHER:
            user.is_teacher_approved = False

        if commit:
            user.save()

        return user