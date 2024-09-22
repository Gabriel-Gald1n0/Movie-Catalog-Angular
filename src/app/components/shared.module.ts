

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//Components
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

//Material
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  exports: [
    CardComponent,
    FooterComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    NavbarComponent,
    MatCardModule,
    CardComponent,
    FontAwesomeModule,
    FooterComponent,
    NavbarComponent,
    FormsModule,
    CommentDialogComponent
  ]
})
export class SharedModule { }
