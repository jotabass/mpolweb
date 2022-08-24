import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagem_erro: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]) ,
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  //função para exibir na página os erros de validação
  get form(): any {
    return this.formLogin.controls;
  }

  //função para executar o SUBMIT do formulário
  onSubmit(): void {
    this.httpClient.post(environment.apiLogin, this.formLogin.value,
      { responseType: 'text' })
      .subscribe({
        next: (result) => {

          //guardar o email em um alocal storage
          localStorage.setItem('access_token', result);

          //redirecionar para a página de consulta de pessoas
          window.location.href = '/mpol-consulta';

        },
        error: (e) => {
          this.mensagem_erro = e.error;
        }
      });

  }

}
