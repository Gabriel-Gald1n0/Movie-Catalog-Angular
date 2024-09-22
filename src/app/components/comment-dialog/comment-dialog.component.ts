import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-dialog',
  template: `
  <div class="comment_container">
  <h1 mat-dialog-title>Adicionar Comentário</h1>
  <div mat-dialog-content>
    <mat-form-field appearance="fill">
      <mat-label>Comentário</mat-label>
      <textarea matInput [(ngModel)]="commentText"></textarea>
    </mat-form-field>
  </div>
  <div mat-dialog-actions>
    <button mat-button (click)="onCancel()">Cancelar</button>
    <button mat-button (click)="onAddComment()">Adicionar</button>
  </div>
  </div>
  `,
  styleUrls: ['./comment-dialog.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
})
export class CommentDialogComponent {
  commentText: string = '';

  constructor(public dialogRef: MatDialogRef<CommentDialogComponent>) {}

  onAddComment(): void {
    this.dialogRef.close(this.commentText);
  } // Add comentario a lista de comentarios


  onCancel(): void {
    this.dialogRef.close();
  }
}
