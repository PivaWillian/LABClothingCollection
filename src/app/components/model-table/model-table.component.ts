import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.scss']
})
export class ModelTableComponent {
  myForm!: FormGroup
  
  constructor(private fb:FormBuilder, private router:Router, private modelosService:ModelosService){}
  
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

  async onSubmit() {
    const modelo: Modelos = this.myForm.value;
    this.modelosService.setModelo(modelo).toPromise();
  }

  cancela(){
    this.router.navigate(['/modelos']);
  }
}
