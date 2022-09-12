from django.db import models

# Create your models here.
class Contents(models.Model):
    book_id = models.IntegerField(unique=True)
    title = models.CharField(max_length=150)
    file = models.FileField(upload_to='uploads/%Y/%m/%d/', default='samples/sample_content.pdf')
    cover = models.ImageField(upload_to='uploads/%Y/%m/%d/', default='samples/sample_cover.jpeg')

    def __str__(self):
        return self.title