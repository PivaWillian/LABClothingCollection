import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-model-table',
  templateUrl: './model-table.component.html',
  styleUrls: ['./model-table.component.scss'],
})
export class ModelTableComponent implements OnInit, DoCheck{
  isNew = true;
  myForm!: FormGroup;
  modelo!: Modelos;
  count: number = 0;
  modelID!: number;
  @Input() colecoes!:Colecoes[];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modelosService: ModelosService,
    private active: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.modelID = Number(this.active.snapshot.params['id']);
    if (this.modelID > 0) {
      this.isNew = false;
      this.modelosService.getModelo(this.modelID)
        .subscribe(data => this.modelo = data);
    }
    this.myForm = this.fb.group({
      nome: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      colecao: ['', Validators.required],
      responsavel: ['', Validators.required],
      bordado: [Validators.required],
      estampa: [Validators.required],
    });
  }

  ngDoCheck() {
    if (this.modelo && this.count === 0) {
      console.log(this.modelo);
      this.myForm.patchValue(this.modelo);
      this.count++;
    }
  }

  async onSubmit() {
    if (this.isNew) {
      const modelo: Modelos = this.myForm.value;
      modelo.colecao = parseInt(this.myForm.value.colecao);
      this.modelosService.setModelo(modelo).toPromise();
      this.isNew = false;
      this.router.navigate(['/modelos']);
    } else
    {
      const modelo: Modelos = this.myForm.value;
      modelo.id = this.modelo.id;
      modelo.colecao = parseInt(this.myForm.value.colecao);
      await this.modelosService.editModelo(modelo).toPromise();
      this.router.navigate(['/modelos']);
    }
  }

  cancela() {
    this.router.navigate(['/modelos']);
  }

  async delete() {
    this.modelosService.deleteModelo(this.modelo.id).toPromise();
    this.router.navigate(['/modelos']);
  }
}
