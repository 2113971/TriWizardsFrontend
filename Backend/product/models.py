from django.db import models
from django.contrib.auth.models import User

# Define the Category model
class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name

# Define the Product model
class Product(models.Model):
    seller = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()
    condition = models.CharField(max_length=50, choices=[('excellent', 'Excellent'), ('good', 'Good'), ('fair', 'Fair')])
    price = models.DecimalField(max_digits=10, decimal_places=2)
    location = models.CharField(max_length=255)
    image_url = models.URLField()
    listed_date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50, choices=[('available', 'Available'), ('sold', 'Sold')])

    def __str__(self):
        return self.title
