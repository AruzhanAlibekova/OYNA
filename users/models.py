from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):

    class Role(models.TextChoices):
        STUDENT = 'student', 'Студент'
        TEACHER = 'teacher', 'Преподаватель'
        ADMIN = 'admin', 'Администратор'

    first_name = models.CharField(
        'Имя',
        max_length=100
    )

    last_name = models.CharField(
        'Фамилия',
        max_length=100
    )

    role = models.CharField(
        'Роль',
        max_length=20,
        choices=Role.choices,
        default=Role.STUDENT
    )

    is_teacher_approved = models.BooleanField(
        'Преподаватель подтверждён',
        default=False
    )

    def __str__(self):
        return f'{self.first_name} {self.last_name}'