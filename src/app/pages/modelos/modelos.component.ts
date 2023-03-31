import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalcService } from 'src/app/services/calc.service';
import { ColecoesService } from 'src/app/services/colecoes.service';

import { ModelosService } from 'src/app/services/modelos.service';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss']
})
export class ModelosComponent implements OnInit, DoCheck {
  modelos: Modelos[] = [];
  colecoes: Colecoes[] = [];
  novoObj: any[] = [];
  count = 0;
   
  constructor(private modelosService: ModelosService, private router: Router,
  private colecoesService: ColecoesService, private calc:CalcService) { }

  criarModelo() {
    
    this.router.navigate(['/editmodel/criar'])
  }
  
  ngDoCheck(): void {
    if (this.colecoes.length >= 1 && this.count === 0) {
      this.novoObj = this.calc.novoObjeto(this.colecoes, this.modelos);
      console.log(this.novoObj);
      this.count++;
    }
  }

  ngOnInit(): void {
    this.modelosService.getModelos().subscribe(data => this.modelos = data)
    this.colecoesService.getColecoes().subscribe(data => this.colecoes = data)
  }
}
