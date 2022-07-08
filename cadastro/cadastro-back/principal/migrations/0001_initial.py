# Generated by Django 4.0.6 on 2022-07-07 19:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cadastro',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nome', models.CharField(max_length=100)),
                ('Matricula', models.CharField(max_length=8, unique=True)),
                ('CPF', models.CharField(max_length=11, unique=True)),
                ('Curso', models.CharField(blank=True, default=None, max_length=50, null=True)),
                ('RG', models.CharField(blank=True, default=None, max_length=10, null=True)),
                ('Email', models.EmailField(blank=True, default=None, max_length=254, null=True)),
            ],
        ),
    ]
