# Generated by Django 3.2.3 on 2021-05-28 21:23

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0002_alter_profile_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profile',
            name='projects',
        ),
    ]
