import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperacao',
  templateUrl: './recuperacao.component.html',
  styleUrls: ['./recuperacao.component.scss']
})
export class RecuperacaoComponent {
  myForm!: FormGroup;
  recuperando: boolean = true;
  correio: string = '';

  constructor(private fb:FormBuilder, private route:Router){}

  ngOnInit(){
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    this.correio = this.myForm.value.email;
    this.recuperando = !this.recuperando;
  }

  voltarLogin(){
    this.route.navigate(['/login']);
  }

}
