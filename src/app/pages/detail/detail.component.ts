import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FavoritesService } from 'src/app/services/favorites.service';
import { MovieService } from 'src/app/services/movie.service';
import { SharedModule } from "../../components/shared.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CommentDialogComponent } from 'src/app/components/comment-dialog/comment-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, SharedModule,FontAwesomeModule],
})
export class DetailComponent implements OnInit{
  public movie: any;
  public isFavorite: boolean = false;
  faStar = faStar;
  faTrash = faTrash;
  public comments: string[] = [];


  constructor(private cd: ChangeDetectorRef,private favoritesService: FavoritesService, private movieService: MovieService, private Router: ActivatedRoute, private dialog: MatDialog,
  private commentService: CommentService) {}

  ngOnInit(): void {
    const movieId = this.Router.snapshot.paramMap.get('id');
    if (movieId) {
      this.getMovieDetails(movieId);
      this.comments = this.commentService.getComments(movieId);
    }
  } // Inicializa o componente

  getMovieDetails(id: string): void {
    this.movieService.getMovieDetails(Number(id)).subscribe(
      (movie: any) => {
        this.movie = movie;
        console.log('Detalhes do filme:', this.movie);
      },
      (error) => {
        console.error('Erro ao buscar os detalhes do filme:', error);
      }
    );
  } // Busca detalhes do filme

  checkIfIsFavorite(movie: any): boolean {
    return this.favoritesService.getFavorites().some((favorite) => favorite.id === this.movie.id);
  } // Verifica se o filme está nos favoritos

  addToFavorites(): void {
    if (this.checkIfIsFavorite(this.movie)) {
      this.favoritesService.removeFavorite(this.movie.id);
    } else {
      this.favoritesService.addFavorite(this.movie);
    }
    this.cd.detectChanges();
  }

  openCommentDialog(): void {
    const dialogRef = this.dialog.open(CommentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addComment(result);
      }
    });
  } // Abre o dialog de comentários

  addComment(comment: string): void {
    const movieId = this.movie.id;
    this.commentService.addComment(movieId, comment);
    this.comments = this.commentService.getComments(movieId);
  } // Adiciona um comentário

  deleteComment(comment: string): void {
    const movieId = this.movie.id;
    this.commentService.deleteComment(movieId, comment);
    this.comments = this.commentService.getComments(movieId);
  } // Deleta um comentário


}
