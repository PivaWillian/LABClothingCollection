import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/tipos/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  public isLogged:boolean = false;
  usuarios!:Users[];

  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private user:UsersService){}

  ngOnInit(){
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]]
    })

    this.user.getUsers().subscribe((data)=>{
      this.usuarios = data;
    })
  }

  onSubmit(){
    this.usuarios.forEach(value =>{
      if(this.myForm.value.email === value.email){
        if(this.myForm.value.senha === value.senha){
          this.isLogged = true;
          localStorage.setItem('Logado', 'true');
          this.route.navigate(['/home'])
        }
      }
    })
  }

  redefinirSenha(){
    this.route.navigate(['/recuperacao']);
  }

  cadastrarUsuario(){
    this.route.navigate(['/cadastro']);
  }
}
