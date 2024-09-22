import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl: string = 'https://api.themoviedb.org/3';
  private apiKey: string = environment.apiKey;

  constructor(private http: HttpClient) { }

  getNowPlayingMovies(query?: string): Observable<any> {
    let url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=pt-BR`;

    if (query) {
      // Se a query for fornecida, mudamos a URL para a busca
      url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&language=pt-BR&query=${encodeURIComponent(query)}`;
    }

    return this.http.get<any>(url).pipe(
      map(response => response.results)  // Extrai apenas o array de filmes da resposta
    );
  } // Busca filmes em cartaz

  getMovieDetails(id: number): Observable<any> {
    const url = `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=pt-BR`;
    return this.http.get<any>(url).pipe(
      map(res => res)
    );
  } // Busca detalhes de um filme
}
