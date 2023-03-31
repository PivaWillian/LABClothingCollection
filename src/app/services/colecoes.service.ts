import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Colecoes } from '../tipos/colecoes';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColecoesService {

  constructor(private http: HttpClient) { }


  getColecoes(): Observable<Colecoes[]>{
    return this.http.get<Colecoes[]>(environment.Collection_Path);
  }

  getColecao(id:number):Observable<Colecoes>{
    return this.http.get<Colecoes>(`${environment.Collection_Path}/${id}`);
  }

  editColecao(colecao:Colecoes):Observable<Colecoes>{
    return this.http.put<Colecoes>(`${environment.Collection_Path}/colecoes/${colecao.id}`, colecao);
  }

  setColecao(colecao:Colecoes):Observable<Colecoes>{
    return this.http.post<Colecoes>(`${environment.Collection_Path}`, colecao);
  }

  deleteColecao(id:Number):Observable<Colecoes>{
    return  this.http.delete<Colecoes>(`${environment.Collection_Path}/${id}`);
  }
}
