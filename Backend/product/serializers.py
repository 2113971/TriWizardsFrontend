from rest_framework import serializers
from .models import Product,Category

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'seller', 'category', 'title', 'description', 'condition', 'price', 'location', 'image_url', 'listed_date', 'status']

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']