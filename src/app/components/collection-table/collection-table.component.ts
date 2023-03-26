import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss']
})
export class CollectionTableComponent {
  myForm!: FormGroup;

  constructor(private fb:FormBuilder){
  }

  ngOnInit(){
    this.myForm = this.fb.group({
      nomeColecao:['', [Validators.required]],
      responsavel:['', [Validators.required]],
      estacao:['', [Validators.required]],
      marca:['', [Validators.required]],
      orcamento:['', [Validators.required]],
      anoLancamento:['', [Validators.required]]
    });
  }

  cancela(){

  }

  onSubmit(){

  }

}
