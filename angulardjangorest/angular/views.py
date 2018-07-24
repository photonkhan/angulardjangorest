# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'header' : 'Working with angular with django rest'
    }
    return render(request, 'angular/index.html', context)

