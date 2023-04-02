import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CalcService } from 'src/app/services/calc.service';
import { Colecoes } from 'src/app/tipos/colecoes';
import { Modelos } from 'src/app/tipos/modelos';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})

export class MainTableComponent implements OnChanges{

  @Input() modelos!: Modelos[];
  @Input() colecoes: Colecoes[] = [];
  
  novaColecao: any[] = [];
  qtdColecoes: number = 0;
  qtdModelos: number = 0;
  orcamentoMedio: number = 0
  @Input() dashboard = false;

  constructor(private calc:CalcService){}

  ngOnChanges() {
    if (this.colecoes) {
      this.novaColecao = this.calc.counting(this.colecoes, this.modelos);
      this.novaColecao = this.calc.ordenaValor(this.novaColecao);
      this.qtdColecoes = this.calc.total(this.colecoes);
      this.qtdModelos = this.calc.total(this.modelos);
      this.orcamentoMedio = this.calc.mediaOrcamento(this.colecoes, this.qtdColecoes);
      // console.log(this.novaColecao);
    }
  }    
}
