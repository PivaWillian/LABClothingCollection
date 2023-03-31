import { isNgTemplate } from '@angular/compiler';
import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { CriarColecaoComponent } from 'src/app/pages/criar-colecao/criar-colecao.component';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { Colecoes } from 'src/app/tipos/colecoes';

@Component({
  selector: 'app-collection-table',
  templateUrl: './collection-table.component.html',
  styleUrls: ['./collection-table.component.scss']
})
export class CollectionTableComponent implements DoCheck{
  myForm!: FormGroup;
  colecao:any;
  colID!: number;
  count = 0;
  isNew = true;

  constructor(private fb: FormBuilder, private router: Router,
    private colecoesService: ColecoesService,
    private active:ActivatedRoute) {
  }

  ngDoCheck(): void {
    if(this.colecao && this.count === 0){
      console.log(this.colecao);
      this.myForm.patchValue(this.colecao);
      this.count++
    }
  }

  ngOnInit(){
    this.colID = Number(this.active.snapshot.params['id']);
    if (this.colID > 0) {
      this.isNew = false
      this.colecoesService.getColecao(this.colID)
        .subscribe(data => this.colecao = data);
    }
    this.myForm = this.fb.group({
      nome:['', [Validators.required]],
      responsavel:['', [Validators.required]],
      season:['', [Validators.required]],
      marca:['', [Validators.required]],
      orcamento:['', [Validators.required]],
      ano:['', [Validators.required]]
    });
  }

  cancela(){
    this.router.navigate(['/colecoes'])
  }

  async onSubmit(){
    if(this.isNew){
      const colecao:Colecoes = this.myForm.value;
      await this.colecoesService.setColecao(colecao).toPromise();
      this.router.navigate(['/colecoes']);
    } else{
      const colecao:Colecoes = this.myForm.value;
      await this.colecoesService.editColecao(colecao).toPromise();
      this.router.navigate(['/colecoes']);
    }
    
  }

  async delete(){
    const colecao:Colecoes = this.myForm.value;
    await firstValueFrom(this.colecoesService.deleteColecao(this.colID));
  }

}
