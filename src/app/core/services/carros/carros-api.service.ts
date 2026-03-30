import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { carros } from '../../model/carros';

@Injectable({
  providedIn: 'root'
})
export class CarrosApiService {

  private apiUrl = 'http://localhost:3002/carros';

  constructor(private http: HttpClient) { }

  getCarros(): Observable < any > {
        return this.http.get<carros[]>(this.apiUrl);
      }
}
