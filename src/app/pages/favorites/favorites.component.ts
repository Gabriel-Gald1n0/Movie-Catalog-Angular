import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesService } from 'src/app/services/favorites.service';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { SharedModule } from "../../components/shared.module";
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, NavbarComponent, SharedModule],
})
export class FavoritesComponent implements OnInit{
  public favorites: any[] = [];

  constructor(private favoritesService: FavoritesService, private router: Router ) {}
  ngOnInit(): void {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }


  public removeFavorite(movieId: number): void {
    this.favoritesService.removeFavorite(movieId);
    this.loadFavorites(); // Atualiza a lista após a remoção
  }

  goDetails(movie: any): void {
    this.router.navigate(['detail', movie.id]);
  } // Navega para a página de detalhes

}
