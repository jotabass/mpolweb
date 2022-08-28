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
import { AccountGuard } from './_guards/account.guard';
import { MpolGuard } from './_guards/mpol.guard';


// mapeando as rotas // e usando guardião [MpolGuard][AccountGuard] para bloquear acesso a rotas pelo navegador
 const routes : Routes = [
  {path : '', pathMatch: 'full', component: PaginaInicialComponent,canActivate: [AccountGuard]},
  {path : 'pagina-inicial', component: PaginaInicialComponent,canActivate: [AccountGuard]},
  {path : 'login', component: LoginComponent,canActivate: [AccountGuard]},
  {path : 'register-user', component: RegisterUserComponent,canActivate: [AccountGuard]},
  {path : 'password-recover', component: PasswordRecoverComponent,canActivate: [AccountGuard]},
  {path : 'mpol-cadastro', component: MpolCadastroComponent,canActivate: [MpolGuard]},
  {path : 'mpol-consulta', component: MpolConsultaComponent,canActivate: [MpolGuard]},
  {path : 'mpol-edicao/:idCliente', component: MpolEdicaoComponent,canActivate: [MpolGuard]}// para editar necessitamos do id do cliente
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
    },
    AccountGuard,
    MpolGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
