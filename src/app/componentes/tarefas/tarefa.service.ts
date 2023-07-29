import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarefa } from './tarefa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  private readonly API = 'http://127.0.0.1:8000/api/task';

  constructor(private http: HttpClient) { }

  listar(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.API);
  }

  criar(task: Tarefa): Observable<Tarefa> {
    const url = `${this.API}/task`;
    return this.http.post<Tarefa>(this.API, task);
  }

  editar(Tarefa: Tarefa): Observable<Tarefa> {
    const url = `${this.API}/${Tarefa.id}`;
    return this.http.put<Tarefa>(url, Tarefa);
  }

  excluir(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Tarefa>(url);
  }

  buscarPorId(id: number): Observable<Tarefa> {
    const url = `${this.API}/${id}`;
    return this.http.get<Tarefa>(url);
  }

  }
