from django.db import models

class Movie(models.Model):
    GENRE_CHOICES = [
        ('action', 'Action'),
        ('comedy', 'Comedy'),
        ('drama', 'Drama'),
        ('horror', 'Horror'),
        ('sci-fi', 'Sci-Fi'),
        ('romance', 'Romance'),
    ]

    title = models.CharField(max_length=255)
    release_date = models.DateField()
    genre = models.CharField(max_length=100, choices=GENRE_CHOICES)
    cover_image = models.ImageField(upload_to='movie_covers/')
    director = models.CharField(max_length=255)

    def __str__(self):
        return self.title

class Favorites(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    added_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Favorite: {self.movie.title}"