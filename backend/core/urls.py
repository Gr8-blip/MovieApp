from django.urls import path
from . import views

urlpatterns = [
    path('display-movies/', views.display_movies, name='display_movies'),
    path('add-favorites/', views.add_to_favorites, name='add_to_favorites'),
    path('display-favorites/', views.display_favorites, name='display_favorites'),
    path('delete-favorite/<int:favorite_id>/', views.delete_favorite, name='delete_favorite'),
]
