# from importlib.resources import contents
# from django.shortcuts import render
# from django.http import HttpResponse

# from rest_framework.response import Response
# from rest_framework.decorators import api_view

# from .models import Contents

from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import ContentsSerializers
from .models import Contents
from django.views import View

# @api_view(['GET', 'POST'])
# def load_cover(request, book_id):
#     if request.method == 'POST':
#         return Response({"message": "Got some data!", "data": request.data})
#     contents = Contents.objects.all()
#     #テスト: DBのデータすべてを取得し表示している
#     #return Response({"message": f"This is {book_id}! contents={contents}"})
#     serializer = ContentsSerializers(contents, many=True,context={"request":request})
#     return Response(serializer.data)

class LoadData(APIView):

    def get(self, request):
        contents = Contents.objects.filter(name=request.query_params['name'])
        serializer = ContentsSerializers(contents, many=True,context={"request":request})
        return Response(serializer.data[0])
