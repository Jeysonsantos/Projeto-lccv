from django.shortcuts import render
from .models import Cadastro
from rest_framework import viewsets
from .serializers import CadastroSerializer

class CadastroViewSet(viewsets.ModelViewSet):
    queryset = Cadastro.objects.all()
    serializer_class = CadastroSerializer