# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from api.models import Contact
from rest_framework import viewsets
from api.serializers import ContactSerializer

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all().order_by('name')
    serializer_class = ContactSerializer
 
    def update(self, request, pk=None):
        queryset = Contact.objects.all()
        serialize_class = ContactSerializer

    def destroy(self, request, pk=None):
        queryset = Contact.objects.all()
        serialize_class = ContactSerializer
    

