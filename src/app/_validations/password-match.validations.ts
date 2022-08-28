import { AbstractControl } from "@angular/forms";

export class PasswordMatchValidation {
    //capturar o campo de senha do formulário
    static MachPassword(abstractControl: AbstractControl) {

        let senha = abstractControl.get('senha')?.value;
        let senhaConfirmacao = abstractControl
            .get('senhaConfirmacao')?.value;

        if (senha != senhaConfirmacao) {
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchPassword: true
            })
        }

        return null;
    }
}    
