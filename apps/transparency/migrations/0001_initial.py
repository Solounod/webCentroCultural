# Generated by Django 4.2.5 on 2023-09-22 04:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Transparency",
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
                    "title",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Titulo"
                    ),
                ),
                (
                    "description",
                    models.TextField(blank=True, null=True, verbose_name="Descripción"),
                ),
                (
                    "link",
                    models.URLField(
                        blank=True, max_length=255, null=True, verbose_name="Link"
                    ),
                ),
                (
                    "file_pdf",
                    models.FileField(
                        blank=True,
                        null=True,
                        upload_to="media/transparencia/",
                        verbose_name="Archivo",
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
            options={
                "verbose_name": "Transparencia",
                "verbose_name_plural": "Transparencias",
            },
        ),
    ]
