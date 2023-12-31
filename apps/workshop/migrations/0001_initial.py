# Generated by Django 4.2.5 on 2023-09-19 22:57

import apps.workshop.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="CategoryWorkshop",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "category_workshop",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Categoria Talleres"
                    ),
                ),
                (
                    "datetime_creation",
                    models.DateTimeField(auto_now=True, verbose_name="Fecha creación"),
                ),
                (
                    "update_datetime",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Fecha modificación"
                    ),
                ),
            ],
            options={"verbose_name": "Categoria Taller",},
        ),
        migrations.CreateModel(
            name="Workshop",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "tittle",
                    models.CharField(max_length=200, verbose_name="Titulo taller"),
                ),
                (
                    "image_workshop",
                    models.ImageField(
                        upload_to=apps.workshop.models.workshop_directory_path,
                        verbose_name="Imagen",
                    ),
                ),
                ("slug", models.SlugField(unique=True)),
                (
                    "facilitator_name",
                    models.CharField(max_length=100, verbose_name="Nombre tallerista"),
                ),
                (
                    "facilitator_link",
                    models.URLField(
                        blank=True, max_length=255, null=True, verbose_name="Link"
                    ),
                ),
                (
                    "description",
                    models.TextField(blank=True, null=True, verbose_name="Descripción"),
                ),
                ("price", models.CharField(max_length=8, verbose_name="Valor")),
                (
                    "datetime_creation",
                    models.DateTimeField(auto_now=True, verbose_name="Fecha creación"),
                ),
                (
                    "update_datetime",
                    models.DateTimeField(
                        auto_now_add=True, verbose_name="Fecha modificación"
                    ),
                ),
                (
                    "category",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="workshop.categoryworkshop",
                    ),
                ),
            ],
            options={"verbose_name": "Taller", "verbose_name_plural": "Talleres",},
        ),
    ]
