import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-mpol-consulta',
  templateUrl: './mpol-consulta.component.html',
  styleUrls: ['./mpol-consulta.component.css']
})
export class MpolConsultaComponent implements OnInit {

  mpol: any[] = [];
  mensagem_sucesso: string = '';
  pagina: number = 1;

  constructor(private httpClient: HttpClient) { }//declarando atributos do componente que já
  //serão inicializados automaticamente

  //método executado sempre que o componente é aberto
  ngOnInit(): void {
    //executar o serviço de consulta de empresas na API
    this.httpClient.get(environment.apiMpol)
      .subscribe({
        //resposta de sucesso da API
        next: (result) => {
          this.mpol = result as any[];
        },
        //resposta de erro da API
        error: (e) => {
          console.log(e);
        }
      });
  }
  //função executada ao clicar no
  //botão de exclusão de empresa
  onDelete(idCliente: number): void {

    if (window.confirm('Deseja realmente excluir a pessoa selecionada ? ')) {
     // executando o servico de exclusao
     this.httpClient.delete(environment.apiMpol + "/" + idCliente, {responseType : 'text'})
     .subscribe({
      next: (result)=>{
        this.mensagem_sucesso = result;
        this.ngOnInit();
      },
      error: (e) =>{
        console.log(e);
      }
     }) 
    }
  }
  // funcao para paginar
  handlePageChange(event: any): void{
    this.pagina = event;
  }
}




