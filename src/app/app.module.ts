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
import { LoginComponent } from './login/login.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { PasswordRecoverComponent } from './password-recover/password-recover.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './_helpers/interceptor.helper';


// mapeando as rotas
 const routes : Routes = [
  {path : '', pathMatch: 'full', component: PaginaInicialComponent},
  {path : 'login', component: LoginComponent},
  {path : 'register-user', component: RegisterUserComponent},
  {path : 'password-recover', component: PasswordRecoverComponent},
  {path : 'mpol-cadastro', component: MpolCadastroComponent},
  {path : 'mpol-consulta', component: MpolConsultaComponent},
  {path : 'mpol-edicao/:idCliente', component: MpolEdicaoComponent}// para editar necessitamos do id do cliente
];

@NgModule({
  declarations: [
    AppComponent,
    MpolCadastroComponent,
    MpolConsultaComponent,
    MpolEdicaoComponent,
    LoginComponent,
    RegisterUserComponent,
    PasswordRecoverComponent,
    PaginaInicialComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
