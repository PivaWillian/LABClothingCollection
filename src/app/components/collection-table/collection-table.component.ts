import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Colecoes } from 'src/app/tipos/colecoes';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss']
})
export class CollectionTableComponent {
  myForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,
    private colecoesService: ColecoesService) {
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
    this.router.navigate(['/colecoes'])
  }

  async onSubmit(){
    const colecao:Colecoes = this.myForm.value;
    await this.colecoesService.setColecao(colecao).toPromise();
  }

}
