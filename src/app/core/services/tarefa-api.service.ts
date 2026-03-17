import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefaApiService {

  private apiUrl = 'http://localhost:3002/listadetarefas';

  constructor(private http: HttpClient) {}

    getTarefas(): Observable < any > {
      return this.http.get(this.apiUrl);
    }
  
}
