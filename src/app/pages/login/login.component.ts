import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private route:Router){}

  ngOnInit(){
    this.myForm = this.fb.group({
      email: ['Informe seu e-mail', [Validators.required, Validators.email]],
      senha: ['Informe sua senha', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){

  }

  redefinirSenha(){
    
  }

  cadastrarUsuario(){
    this.route.navigate(['/cadastro']);
  }
}
