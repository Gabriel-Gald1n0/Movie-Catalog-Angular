import { Router } from '@angular/router';
import { FavoritesService } from './../../services/favorites.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MovieService } from 'src/app/services/movie.service';
import { SearchComponent } from "../../pages/search/search.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, CommonModule, SearchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  getAllMovies: any[] = [];
  favoriteMovies: any[] = [];
  isSearchEmpty: boolean = false;

  @Input() searchQuery: string = ''; // Recebe a query de busca

  constructor(private movieService: MovieService, private cd: ChangeDetectorRef, private favoritesService: FavoritesService, private router: Router) { }

  ngOnInit(): void {
    this.fetchMovies(); // Busca filmes ao inicializar
  }

  // Busca Filmes
  fetchMovies(query?: string): void {
    this.movieService.getNowPlayingMovies(query).subscribe(
      (movies: any[]) => {
        this.getAllMovies = movies;
        this.isSearchEmpty = this.getAllMovies.length === 0;
        this.cd.detectChanges(); // Força detecção de mudanças
      },
      (error) => {
        console.error('Erro ao buscar os filmes:', error);
        this.isSearchEmpty = true;
        this.cd.detectChanges(); // Força detecção de mudanças
      }
    );
  }

  ngOnChanges(): void {
    this.fetchMovies(this.searchQuery); // Reage a mudanças na busca
  }

  addToFavorites(movie: any): void {
    if (this.isFavorite(movie)) {
      this.favoritesService.removeFavorite(movie.id);
    } else {
      this.favoritesService.addFavorite(movie);
    }
    this.cd.detectChanges(); // Força detecção de mudanças
  }

  isFavorite(movie: any): boolean {
    return this.favoritesService.getFavorites().some((fav) => fav.id === movie.id);
  }

  goDetails(movie: any): void {
    this.router.navigate(['detail', movie.id]);
  }
}
