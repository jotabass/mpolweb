import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-mpol-edicao',
  templateUrl: './mpol-edicao.component.html',
  styleUrls: ['./mpol-edicao.component.css']
})
export class MpolEdicaoComponent implements OnInit {

  //atributos
  mensagem_sucesso: string = '';
  mensagem_erro: string = '';


  constructor(
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }
  //criando a estrutura do formulário
  formEdicao = new FormGroup({
    idCliente: new FormControl('', [Validators.required]),
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required])
  });

  //função para que possamos acessar as mensagens de erro dos campos do formulário na página

  get form(): any {
    return this.formEdicao.controls;
  }

  ngOnInit(): void {


    // capturando o id da pessoa enviado na URL
    var idCliente = this.activatedRoute.snapshot.paramMap.get('idCliente');
    //consultando os dados da pessoa na API
    this.httpClient.get(environment.apiMpol + "/" + idCliente)
      .subscribe({
        next: (result) => {
          this.formEdicao.patchValue(result);
          //console.log(result); 
        },
        error: (e) => {
          console.log(e);
        }
      })
  }
  //função para executar a atualização dos dados da pessoa
  onSubmit(): void {

    this.mensagem_sucesso = '';
    this.mensagem_erro = '';

    this.httpClient.put(environment.apiMpol, this.formEdicao.value,
      {responseType:'text'})
      .subscribe({
        next: (result) => {
          this.mensagem_sucesso = result;
        },
        error: (e) => {
          this.mensagem_erro = e.error;
        }
      });
  }

}
