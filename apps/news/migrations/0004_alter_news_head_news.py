# Generated by Django 4.2.5 on 2023-10-28 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("news", "0003_alter_news_options_news_date_creation_news_head_news"),
    ]

    operations = [
        migrations.AlterField(
            model_name="news",
            name="head_news",
            field=models.TextField(default="", verbose_name="Encabezado"),
        ),
    ]
