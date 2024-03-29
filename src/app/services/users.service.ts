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

  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(environment.Users_Path);
  }

  getUser(id:number):Observable<Users>{
    return this.http.get<Users>(`${environment.Users_Path}/${id}`);
  }

  setUser(user:Users):Observable<Users>{
    return this.http.post<Users>(`${environment.Users_Path}`, user);
  }
}
