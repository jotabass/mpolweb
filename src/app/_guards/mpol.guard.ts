import { CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";

/*
    Guardião para as rotas:
        /mpol-cadastro
        /mpol-consulta
        /mpol-edicao/:id
*/
@Injectable()
export class MpolGuard implements CanActivate {
    canActivate() {

        //REGRA: Só acessar se o usuário ESTIVER autenticado
        if (localStorage.getItem('access_token') != null
            && localStorage.getItem('email_usuario') != null) {
            return true;
        }
        else {
            window.location.href = '/';
            return false;
        }
    }
}
