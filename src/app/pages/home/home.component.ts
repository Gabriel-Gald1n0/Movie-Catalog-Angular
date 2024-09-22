import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  onSearch(value: string): void {
    this.searchQuery = value; // Armazena a consulta de pesquisa
  }
}
