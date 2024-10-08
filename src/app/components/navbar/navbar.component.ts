import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
})
export class NavbarComponent {
  constructor(private router: Router){ }

  addToFavorites(): void {
    this.router.navigate(['/favorites']);
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
