from django.contrib import admin
from .models import UserKeywordCount

class UserKeywordCountAdmin(admin.ModelAdmin):
    
    list_display = [field.name for field in UserKeywordCount._meta.get_fields()]


admin.site.register(UserKeywordCount, UserKeywordCountAdmin)