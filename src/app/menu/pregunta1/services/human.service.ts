import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Human } from '../human';

@Injectable({
  providedIn: 'root'
})
export class HumanService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getHumanCharacters(): Observable<Human[]> {
    return this.httpClient.get<any>(this.apiUrl).pipe(
      map(response => response.results.filter((character: any) => character.species === 'Human'))
    );
  }
}
