import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarTarefas',
    pathMatch: 'full'
  },
  {
    path: 'listarTarefas',
    component: ListarTarefasComponent
  },
  {
    path: 'criarTarefas',
    component: CriarTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
