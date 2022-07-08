from rest_framework import routers, serializers, viewsets
from .models import Cadastro

class CadastroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cadastro
        fields = ['id', 'Nome', 'Matricula','CPF','Curso','RG','Email']