# Generated by Django 4.2.5 on 2023-11-09 19:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="gallerytheaterplays",
            options={
                "ordering": ["-datetime_creation"],
                "verbose_name": "Galeria",
                "verbose_name_plural": "Galerias",
            },
        ),
        migrations.AlterModelOptions(
            name="imggallery",
            options={
                "ordering": ["-datetime_creation"],
                "verbose_name": "Imagen galeria",
                "verbose_name_plural": "Imagenes galerias",
            },
        ),
        migrations.AlterModelOptions(
            name="linkstheaterplays",
            options={
                "ordering": ["-datetime_creation"],
                "verbose_name": "Link",
                "verbose_name_plural": "Links",
            },
        ),
        migrations.AlterModelOptions(
            name="theaterplays",
            options={
                "ordering": ["-datetime_creation"],
                "verbose_name": "Obra",
                "verbose_name_plural": "Obras",
            },
        ),
    ]