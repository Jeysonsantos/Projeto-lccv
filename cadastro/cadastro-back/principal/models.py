from django.db import models

class Cadastro(models.Model):
    Nome = models.CharField(max_length=100)
    Matricula = models.CharField(max_length=8, unique=True)
    CPF = models.CharField(max_length=11, unique=True)
    Curso = models.CharField(max_length=50, blank=True, default=None, null=True)
    RG = models.CharField(max_length=10, blank=True, default=None, null=True)
    Email = models.EmailField(blank=True, default=None, null=True)


    def __str__ (self):
        return self.CPF

