# Mpolweb

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## alteração feita na rota das paginas de cadastro e register.

## geração de token para logar na pagina com o auxilio do JWT 
para autenticar o usuários no projeto API na hora do login.

## criado um interceptador com o recurso INTERCEPTOR do Angular ->  para as requisições das APIs onde  sempre que a biblioteca HttpClient fizer uma requisição para um determinado ENDPOINT de uma API,
 possamos enviar junto com a requisição um TOKEN de autenticação.



                         dia 24/08  
 * criado itens de cadastro e feito validacoes para estes itens

 * utilizado a biblioteca JWT para geracao de token
==================================================================================================
                        dia 25/08
criado funcao logout -> para deslogar da pagina redirecionando para pagina raiz "Login".
criado guardiao nas rotas para que haja acesso apenas estando logado 
usando o "guard" do angular
==================================================================================================
                          dia 28/08

 * resolvido bug onde não estava sendo permitido o cadastro de pessoas através da pagina rota "mpol-cadastro". erro 401 Forbidden
    o erro estava na pagina mpol-cadastro.component.ts -> onde os itens de cadastro não estavam no formulario de cadastro "formcadastro".
      onde é possivel fazer as validações.

 * e no backend na classe JWTCONFIGURATION não dei permissão ao método POST da rota /api/mpol,
   "sem a permissão o tokem não liberava o cadastro". 
      ex para fixar  -> .antMatchers(HttpMethod.POST, "/api/mpol").permitAll() 


