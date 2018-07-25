# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length = 128)
    email = models.CharField(max_length = 255)
    address = models.CharField(max_length = 255)

    def __str__(self):
        return self.name