import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { MpolCadastroComponent } from './mpol-cadastro/mpol-cadastro.component';
import { MpolConsultaComponent } from './mpol-consulta/mpol-consulta.component';
import { MpolEdicaoComponent } from './mpol-edicao/mpol-edicao.component';
import { NgxPaginationModule } from 'ngx-pagination';

// mapeando as rotas
 const routes : Routes = [
  {path : '', pathMatch: 'full', redirectTo: 'mpol-consulta' },
  {path : 'mpol-cadastro', component: MpolCadastroComponent},
  {path: 'mpol-consulta', component: MpolConsultaComponent},
  {path : 'mpol-edicao/:idCliente', component: MpolEdicaoComponent}// para editar necessitamos do id do cliente
 ];

@NgModule({
  declarations: [
    AppComponent,
    MpolCadastroComponent,
    MpolConsultaComponent,
    MpolEdicaoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
