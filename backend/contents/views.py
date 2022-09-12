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

class LoadContentInfo(APIView):
    def get(self, request):
        contents = Contents.objects.get(book_id = request.query_params['id'])
        serializer = ContentsSerializers(contents, many=False,context={"request":request})
        return Response(serializer.data)

# class LoadCover(APIView):

#     def get(self, request):
#         contents = Contents.objects.filter(id=request.query_params['book_id'])
#         serializer = ContentsSerializers(contents, many=False,context={"request":request})
#         return Response(serializer.data['cover'])

# class LoadContent(APIView):

#     def get(self, request):
#         contents = Contents.objects.get(id=request.query_params['id'])
#         serializer = ContentsSerializers(contents, many=False,context={"request":request})
#         return Response(serializer.data['content'])


# class LoadCoverList(APIView):

#     def get(self, request):
#         namelist=request.query_params['name'].split(",")
#         contents = Contents.objects.filter(name__in=namelist)
#         serializer = ContentsSerializers(contents, many=True,context={"request":request})
#         coverlist=[d["cover"] for d in serializer.data]
#         return Response(coverlist)
