"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from contents import views
from django.conf.urls import url, include

from rest_framework.response import Response
from rest_framework.decorators import api_view



urlpatterns = [
    path('admin/', admin.site.urls),
    # path('<int:book_id>/cover', views.load_cover),
    path('content_info/', views.LoadContentInfo.as_view()),
    
    # path('content/', views.LoadContent.as_view() ),
    # path('cover/', views.LoadCover.as_view() ),
    # path('coverlist/', views.LoadCoverList.as_view() ),
    
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
