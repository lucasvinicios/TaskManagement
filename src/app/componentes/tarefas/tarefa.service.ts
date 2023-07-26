import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API);
  }

  }
