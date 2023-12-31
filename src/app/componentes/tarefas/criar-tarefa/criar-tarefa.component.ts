import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-tarefa',
  templateUrl: './criar-tarefa.component.html',
  styleUrls: ['./criar-tarefa.component.css']
})
export class CriarTarefaComponent implements OnInit {

  tarefa: Tarefa = {
    title: '',
    description: '',
    date: new Date
  }

  constructor(
    private service: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  criar() {
    this.service.criar(this.tarefa).subscribe(() => {
      this.router.navigate(['/listarTarefas']);
    })
  }

  cancelar() {
    this.router.navigate(['/listarTarefas']);
  }

  editMode(){
    this.router.navigate(['tarefas/editar', this.tarefa.id]);
  }

}
