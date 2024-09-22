import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoritesKey = 'favoriteMovies';

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem(this.favoritesKey) || '[]');
  } // Retorna a lista de favoritos

  addFavorite(movie: any): void {
    const favorites = this.getFavorites();
    if (!favorites.some((fav: any) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  } // Adiciona um filme aos favoritos

  removeFavorite(movieId: number): void {
    let favorites = this.getFavorites();
    favorites = favorites.filter(fav => fav.id !== movieId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  } // Remove um filme dos favoritos
}
