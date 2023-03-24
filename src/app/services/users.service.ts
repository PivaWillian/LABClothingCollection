import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../tipos/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private http:HttpClient) { }

  getColecoes(): Observable<Users[]>{
    return this.http.get<Users[]>(environment.Users_Path);
  }

  getColecao(id:number):Observable<Users>{
    return this.http.get<Users>(`${environment.Users_Path}/${id}`);
  }

  editColecao(colecao:Users):Observable<Users>{
    return this.http.put<Users>(`${environment.Users_Path}/colecoes/${colecao.id}`, colecao);
  }

  setColecao(colecao:Users):Observable<Users>{
    return this.http.post<Users>(`${environment.Users_Path}/${colecao.id}`, colecao);
  }

  deleteColecao(id:Number):Observable<Users>{
    return  this.http.delete<Users>(`${environment.Users_Path}/colecoes/${id}`);
  }
}
