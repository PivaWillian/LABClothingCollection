import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Modelos } from '../tipos/modelos';

@Injectable({
  providedIn: 'root'
})
export class ModelosService {

  constructor(private http:HttpClient) { }

  getModelos(): Observable<Modelos[]>{
    return this.http.get<Modelos[]>(environment.Modelos_Path);
  }

  getModelo(id:number):Observable<Modelos>{
    return this.http.get<Modelos>(`${environment.Modelos_Path}/${id}`);
  }

  editModelo(colecao:Modelos):Observable<Modelos>{
    return this.http.put<Modelos>(`${environment.Modelos_Path}/colecoes/${colecao.id}`, colecao);
  }

  setModelo(colecao:Modelos):Observable<Modelos>{
    return this.http.post<Modelos>(`${environment.Modelos_Path}`, colecao);
  }

  deleteModelo(id:Number):Observable<Modelos>{
    return  this.http.delete<Modelos>(`${environment.Modelos_Path}/colecoes/${id}`);
  }
}
