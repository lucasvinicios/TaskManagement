import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTarefasComponent } from './componentes/tarefas/listar-tarefas/listar-tarefas.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CriarTarefaComponent } from './componentes/tarefas/criar-tarefa/criar-tarefa.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarTarefasComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarTarefaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
