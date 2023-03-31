import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelosService } from 'src/app/services/modelos.service';
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
  modelID: number = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private modelosService: ModelosService,
    private active:ActivatedRoute
  ) {}

  ngOnInit() {
    this.modelosService.getModelo(this.modelID).subscribe(data => this.modelo = data)
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
      this.modelosService.setModelo(modelo).toPromise();
    } else
    {
      const modelo: Modelos = this.myForm.value;
      modelo.id = this.modelo.id;
      await this.modelosService.editModelo(modelo).toPromise();
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
