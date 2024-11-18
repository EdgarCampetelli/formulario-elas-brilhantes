
import { Contato } from "./contato.module";
import { Email } from "./email.module";
import { Endereco } from "./endereco.module";

export class Login{
    id: null;
    nome: any;
    nomeSocial: any;
    cpf: any;
    rg: any;
    dataNascimento: any;
    tipoPessoa: 'F';

    enderecos: Endereco[] = [];

    emails: Email[] = [];

    contatos: Contato[] =[];

}