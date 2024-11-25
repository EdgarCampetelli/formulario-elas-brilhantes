import { Login } from "../../login/models/login.module";

export class Sorteio{
    id:null;
    numeroSorte:any;
    dataHora:any;
    evento:{
        id:null;
        nomeEvento:any;
        data:any;
        horaInicio:any;
        horaTermino:any;
    };
    sorteado: any;
    participantes: Login[] = []
}