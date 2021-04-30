import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sorts } from 'src/shared/model/sorts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SortsService {

  constructor(private http:HttpClient) { }

  post(sort : Sorts): Observable<Sorts>{
    return this.http.post<Sorts>("http://localhost:3000/sorts", sort)
  }

  getWithChampId(id:number):Observable<Sorts[]>{
    return this.http.get<Sorts[]>("http://localhost:3000/sorts?id_champion="+id);
  }

  delete(id: number){
    return this.http.delete('http://localhost:3000/sorts/'+id);
  }

  getById(id: number):Observable<any>{
    return this.http.get("http://localhost:3000/sorts/" + id);
  }

  put(id: number, sort: Sorts){
    return this.http.put('http://localhost:3000/sorts/'+id, sort)
  }

}
