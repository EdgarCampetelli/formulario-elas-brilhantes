import { Component, OnInit } from '@angular/core';
import { FormBuilder ,ReactiveFormsModule,Validators } from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../../../../shared/shared.module';
import { CpfValidator } from '../../../../shared/validators/cpf.validator';
import { LoginService } from '../../services/login.service';
import { Login } from '../../models/login.module';
import { Endereco } from '../../models/endereco.module';
import { Contato } from '../../models/contato.module';
import { Email } from '../../models/email.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  

  form!: FormGroup;
  loginModule : Login = new Login();
  enderecoModule : Endereco = new Endereco();
  contatoModule : Contato = new Contato();
  emailModule : Email = new Email();

  constructor( 
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private loginService: LoginService
  ){}

  ngOnInit(): void {
      this.gerarForm();
  }

  gerarForm(){
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      nomeSocial: ['', [Validators.required, Validators.minLength(2)]],
      cpf: ['', [Validators.required, CpfValidator]],
      email: ['', [Validators.required, Validators.email]],
      celular: ['', [Validators.required, Validators.minLength(11)]],
      cep: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
      logradouro: ['', [Validators.required, Validators.minLength(2)]],
      numero: ['', [Validators.required]],
      bairro: ['', [Validators.required, Validators.minLength(2)]],
      cidade: ['', [Validators.required, Validators.minLength(2)]],
      estado: ['', [Validators.required, Validators.minLength(2)]],
      complemento: [''] ,
      termos : ['', [Validators.required]],
      adesao : ['', [Validators.required]],
    })
  }

  logar(){
    if(this.form.invalid){
      return alert('Preencha todos os campos !');
    }
    let login:any = new Login();
    login.nome = this.form.value.nome;
    login.nomeSocial = this.form.value.nomeSocial;
    login.cpf = this.form.value.cpf;
    login.emails.push({email: this.form.value.email});
    login.contatos.push({numero: this.form.value.celular});
    login.enderecos.push({
      logradouro: this.form.value.logradouro,
      numero : this.form.value.numero,
      cep : this.form.value.cep,
      complemento : this.form.value.complemento,
      bairro : this.form.value.bairro,
      cidade : this.form.value.cidade,
      estado : this.form.value.estado,
      pais : this.form.value.pais
    })
    this.loginService.logar(login)
      .subscribe(
       (data:any) => {
          const msg : string = "Formulario preenchido com sucesso !";
          this.snackBar.open(msg, "Sucesso", {duration:5000});
          this.router.navigate([`/sucesso/`]);    
        },
      err => {
        this.snackBar.open("Erro banco ","Erro", {duration:5000});
        let msg: string = "Tente novamente em instantes.";
        if(err.status == 400){
        msg = err.error.errors.join('Erro ao enviar');
        }
        this.snackBar.open(msg,"Erro", {duration:5000});
      }
    );
      
  
  }
}
