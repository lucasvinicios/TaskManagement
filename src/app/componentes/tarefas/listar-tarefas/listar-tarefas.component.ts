import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {

  listarTarefas: Tarefa[] = [];

  constructor(private service: TarefaService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(
      (listarTarefas) => {
        this.listarTarefas = listarTarefas
      }
    )
  }

}
