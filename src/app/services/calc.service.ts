import { Injectable } from '@angular/core';
import { Colecoes } from '../tipos/colecoes';
import { Modelos } from '../tipos/modelos';

@Injectable({
  providedIn: 'root'
})
export class CalcService {

  constructor() { }

  counting(colecoes: Colecoes[], modelos: Modelos[]){
    const novoObj: any[] = [];
    colecoes.forEach(col => {
      const modelosColecao = modelos.filter(q => q.colecao === col.id);
      const obj = {
        ...col,
        qtdModelos: modelosColecao.length
      };
      novoObj.push(obj);
    }) 
    
    return novoObj;
  };

  novoObjeto(colecoes: Colecoes[], modelos: Modelos[]){
    const novoObj: any[] = [];
    modelos.forEach(model => {
      const colReferencia = colecoes.filter(q => q.id === model.colecao);
      const obj = {
        ...model,
        nomeColecao: colReferencia[0].nome
      };
      novoObj.push(obj);
    }) 
    
    return novoObj;
  };

  total(arr: Colecoes[] | Modelos[]) {
    return arr.length;
  }

  mediaOrcamento(colecoes:Colecoes[], totalColecoes:number) {
    let valorTotal = 0;
    for (let i = 0; i < colecoes.length; i++){
      valorTotal += colecoes[i].orcamento;
    }
    return valorTotal / totalColecoes;
  }

  ordenaValor(colecaoMod:any[]) {
    return colecaoMod.sort((a, b) => (a.orcamento > b.orcamento ? -1 : 1));
  }

  
}
