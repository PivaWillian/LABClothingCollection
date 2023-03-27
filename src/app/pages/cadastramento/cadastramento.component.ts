import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/tipos/users';

@Component({
  selector: 'app-cadastramento',
  templateUrl: './cadastramento.component.html',
  styleUrls: ['./cadastramento.component.scss']
})
export class CadastramentoComponent {

  myForm!: FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private userService: UsersService){}

  ngOnInit(){
    this.myForm = this.fb.group({
      nome: ['', [Validators.required]],
      empresa: ['', [Validators.required]],
      cnpj: ['', [Validators.required, Validators.minLength(14)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8)]],
      // confirmacao: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  onSubmit(){
    this.criarUsuario();    
  }

  criarUsuario(){
    const usuario:Users = this.myForm.value
    this.userService.setUser(usuario).subscribe();
    console.log(usuario);
  }

  realizaLogin(){
    this.route.navigate(['/login']);
  }
}
