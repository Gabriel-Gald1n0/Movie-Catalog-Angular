import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  addComment(movieId: string, comment: string): void {
    const comments = this.getComments(movieId);
    comments.push(comment);
    localStorage.setItem(movieId, JSON.stringify(comments));
  } // Adiciona um comentário

  getComments(movieId: string): string[] {
    const comments = localStorage.getItem(movieId);
    return comments ? JSON.parse(comments) : [];
  } // Retorna os comentários de um filme

  deleteComment(movieId: string, comment: string): void {
    let comments = this.getComments(movieId);
    comments = comments.filter(c => c !== comment);
    localStorage.setItem(movieId, JSON.stringify(comments));
  }// Deleta um comentário
}
