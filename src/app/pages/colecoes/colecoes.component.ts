import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ColecoesService } from 'src/app/services/colecoes.service';
import { ModelosService } from 'src/app/services/modelos.service';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent {
  models!: Modelos[];
  collections!: Colecoes[];

  constructor(private colecoesService: ColecoesService,
    private modelosService: ModelosService,
    private router:Router) { }

  ngOnInit(): void {
    this.modelosService.getModelos().subscribe(data => {
      this.models = data;
    });

    this.colecoesService.getColecoes().subscribe(data =>{
      this.collections = data;
    });
  }  
  criarColecao(){
    this.router.navigate(['/criar'])
  }
}
