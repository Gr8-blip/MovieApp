import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from .models import Movie, Favorites
from .serializers import MovieSerializer, FavoritesSerializer
from rest_framework.decorators import api_view


@api_view(['GET'])
def display_movies(request):
    movies = Movie.objects.all()
    serializer = MovieSerializer(movies, many=True)

    return Response(serializer.data)

@api_view(['POST'])
@csrf_exempt
def add_to_favorites(request):
    data = json.loads(request.body)
    movie_id = data.get("movie_id")
    print(movie_id)
    movie = Movie.objects.get(id=movie_id)
    try:
        favorite, created = Favorites.objects.get_or_create(movie=movie)
        return Response({'message': 'Added to favorites!'}, status=201)
    except movie.DoesNotExist:
        return Response({'error': 'Movie not found'}, status=404)

@api_view(['GET'])
def display_favorites(request):
    favorite_movies = Favorites.objects.all()
    serializer = FavoritesSerializer(favorite_movies, many=True)

    return Response(serializer.data)

@api_view(['DELETE'])
@csrf_exempt
def delete_favorite(request, favorite_id):
    if request.method == "DELETE":
        try:
            favorite = Favorites.objects.get(id=favorite_id)
            favorite.delete()
            return Response({'message': 'Favorite deleted successfully!'}, status=201)
        except Favorites.DoesNotExist:
            return Response({'error': 'Favorite not found'}, status=404)
    return Response({"error": "Invalid request method."}, status=400)