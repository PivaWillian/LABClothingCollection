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
  maisOutra: any[] = [];
  qtdColecoes: number = 0;
  qtdModelos: number = 0;
  orcamentoMedio: number = 0
  @Input() dashboard = false;

  constructor(private calc:CalcService){}

  ngOnChanges() {
    if (this.colecoes) {
      this.ordenaValor();
      this.contandoModelos();
      this.totalColecoes();
      this.totalModelos();
      this.mediaOrcamento();
      this.maisOutra = this.calc.counting(this.colecoes, this.modelos);
      console.log(this.maisOutra);
    }
  }

  totalColecoes() {
    this.qtdColecoes = this.colecoes.length;
  }

  totalModelos() {
    this.qtdModelos = this.modelos.length;
  }

  mediaOrcamento() {
    let valorTotal = 0
    for (let i = 0; i < this.colecoes.length; i++){
      valorTotal += this.colecoes[i].orcamento;
    }
    this.orcamentoMedio = valorTotal / this.qtdColecoes;
  }

  ordenaValor() {
   if(this.colecoes){
     this.colecoes.sort((a, b) => (a.orcamento > b.orcamento ? -1 : 1));
    }
  }

  contandoModelos(){
    // nao - let colecoesModificada = [];
    console.log(this.colecoes)
    for(let i=0; i < this.colecoes.length; i++){
      const modelosColecao = this.modelos.filter(q => q.colecao === this.colecoes[i].id)
      const obj = {
        ...this.colecoes[i],
        qtdModelos: modelosColecao.length
      };
      console.log(obj);
      this.novaColecao.push(obj);
    }
    // nao this.novaColecao = colecoesModificada;
    console.log(this.novaColecao)
  }


  
}
