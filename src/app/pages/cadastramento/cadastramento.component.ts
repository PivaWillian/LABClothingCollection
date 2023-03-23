import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['./cadastramento.component.scss']
})
export class CadastramentoComponent {

  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private route:Router){}

  ngOnInit(){
    this.myForm = this.fb.group({
      nome: ['Nome', [Validators.required]],
      empresa: ['Empresa', [Validators.required]],
      cnpj: ['CNPJ', [Validators.required, Validators.minLength(14)]],
      email: ['Informe seu e-mail', [Validators.required, Validators.email]],
      senha: ['Informe sua senha', [Validators.required, Validators.minLength(8)]],
      confirmacao: ['Confirmar senha', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){
    if(this.myForm.value.senha == this.myForm.value.confirmacao){
      console.log('hello');
    }else{
      console.log('no hello');
    }
  }

  redefinirSenha(){
    
  }

  cadastrarUsuario(){

  }
}
