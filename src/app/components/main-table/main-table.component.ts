import { Component, Input, OnChanges, OnInit } from '@angular/core';
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
  novaColecao:any[] = [];

  ngOnChanges() {
    if(this.colecoes){
      this.ordenaValor();
      this.contando();
    }
  }

  ordenaValor() {
   if(this.colecoes){
     this.colecoes.sort((a, b) => (a.orcamento > b.orcamento ? -1 : 1));
    }
  }

  contando(){
    // let colecoesModificada = [];
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
    // this.novaColecao = colecoesModificada;
    console.log(this.novaColecao)
  }
  
}
