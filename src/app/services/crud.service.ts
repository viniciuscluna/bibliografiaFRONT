import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.http.get(`https://localhost:44356/api/Name`);
  }

  public insertUser(users:any) : Observable<any>{
    return this.http.post(`https://localhost:44356/api/Name`,users);
  }
}
