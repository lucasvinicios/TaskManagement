import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';
import { EditarTarefaComponent } from './componentes/tarefas/editar-tarefa/editar-tarefa.component';
import { ExcluirTarefaComponent } from './componentes/tarefas/excluir-tarefa/excluir-tarefa.component';

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
    path: 'criarTarefa',
    component: CriarTarefaComponent
  },
  {
    path: 'editarTarefa/:id',
    component: EditarTarefaComponent
  },
  {
    path: 'excluirTarefa/:id',
    component: ExcluirTarefaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
