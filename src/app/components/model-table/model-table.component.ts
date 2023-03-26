import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.scss']
})
export class ModelTableComponent {
  myForm!: FormGroup
  
  constructor(private fb:FormBuilder){}
  
  ngOnInit(){
    this.myForm = this.fb.group({
      nomeModelo:['', [Validators.required]],
      tipoModelo:['', [Validators.required]],
      selecionarColecao:['', Validators.required],
      responsavelModelo:['', Validators.required],
      bordado:[Validators.required],
      estampa:[Validators.required]
    })
  }

  onSubmit(){
    console.log(this.myForm.value.bordado);
    console.log(this.myForm.value.estampa);
  }

  cancela(){

  }
}
