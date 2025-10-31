from rest_framework import serializers
from .models import Movie, Favorites

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['id', 'title', 'release_date', 'genre', 'cover_image', 'director']

class FavoritesSerializer(serializers.ModelSerializer):
    movie = MovieSerializer()
    class Meta:
        model = Favorites
        fields = ['id', 'movie', 'added_on']