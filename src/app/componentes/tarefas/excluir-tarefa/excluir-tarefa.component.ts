import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefa';
import { TarefaService } from '../tarefa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-tarefa',
  templateUrl: './excluir-tarefa.component.html',
  styleUrls: ['./excluir-tarefa.component.css']
})
export class ExcluirTarefaComponent implements OnInit {

  tarefa: Tarefa = {
    title: '',
    description: '',
    date: new Date
  }

  constructor(
    private service: TarefaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.buscarPorId(parseInt(id!)).subscribe((tarefa) => {
      this.tarefa = tarefa
    })
  }

  confirmarExclusao(): void {
    if (this.tarefa.id){
      this.service.excluir(this.tarefa.id).subscribe(() => {
        this.router.navigate(['/listarTarefas'])
      })
    }
  }

  cancelarExclusao(){
    this.router.navigate(['/listarTarefas'])
  }


}
