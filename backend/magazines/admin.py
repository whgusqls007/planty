from django.contrib import admin
from .models import Magazine, MagazineComment

# Register your models here.
admin.site.register(Magazine)
admin.site.register(MagazineComment)