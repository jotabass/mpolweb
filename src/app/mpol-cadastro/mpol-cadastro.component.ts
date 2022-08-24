import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({ // uma anotation 
  selector: 'app-mpol-cadastro',
  templateUrl: './mpol-cadastro.component.html',
  styleUrls: ['./mpol-cadastro.component.css']
})
export class MpolCadastroComponent implements OnInit {// implementa uma interfae

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';
  constructor(
    // declarando um atributo auto-inicializado (injecao de dependência)
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }
  //criando o modelo de dados do formulário
  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),// comeca commvalor inicial vazio mais depois é obrigatorio
    cpf: new FormControl('', Validators.required) // comeca commvalor inicial vazio mais depois é obrigatorio
  })
  //função para exibir as validações dos campos na página
  get form(): any {
    return this.formCadastro.controls;
  }
  //função para processar o evento SUBMIT do formulário
  onSubmit(): void {// metodo do tipo void
    // limpanr as mensagens
    this.mensagem_sucesso = '';
    this.mensagem_erro = '';
    // endereço da api mpol
    const url = environment.apiMpol;
    // json contendo os dados do formulario
    const dados = this.formCadastro.value;

    this.httpClient.post(url, dados, { responseType: 'text' })
      .subscribe(
        {
          // retorno da api para sucesso
          next: (result) => {
            this.mensagem_sucesso = result;
            this.formCadastro.reset();// limpa os campos
          },
          // retorno da api para erro
          error: (e) => {
            this.mensagem_erro = e.error;

          }

        }
      )
  }
}
