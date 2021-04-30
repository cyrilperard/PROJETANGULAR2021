import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Utilisateurs } from '../shared/model/utilisateurs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http:HttpClient) {}

  get():Observable<Utilisateurs[]>{
    return this.http.get<Utilisateurs[]>("http://localhost:3000/utilisateurs");
  }

}
