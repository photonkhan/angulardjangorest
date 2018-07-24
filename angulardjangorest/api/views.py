# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
def index(request):
    context = {
        'header' : 'Angular with Djano Rest API'
    }
    return render(request, 'api/index.html', context)

