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
  
}
