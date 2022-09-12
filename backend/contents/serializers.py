from rest_framework import serializers
from .models import Contents

class ContentsSerializers(serializers.ModelSerializer):
    cover = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Contents

        fields = ['name','content','cover',]