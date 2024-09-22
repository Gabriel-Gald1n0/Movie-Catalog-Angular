import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
})
export class SearchComponent implements OnInit {
  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  public search(event: Event, value: string){
    event.preventDefault();
    this.emmitSearch.emit(value);
  } // Emitir a consulta de pesquisa

  public onInputChange(value: string) {
    if (!value) {
      this.emmitSearch.emit(''); // Emitir um valor vazio para limpar a pesquisa
    }
  }

}
