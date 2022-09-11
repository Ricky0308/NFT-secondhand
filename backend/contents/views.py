from importlib.resources import contents
from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Contents

@api_view(['GET', 'POST'])
def load_cover(request, book_id):
    if request.method == 'POST':
        return Response({"message": "Got some data!", "data": request.data})
    contents = Contents.objects.all()
    
    return Response({"message": f"This is {book_id}! contents={contents}"})
