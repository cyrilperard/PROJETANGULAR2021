import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Champions } from 'src/shared/model/champions';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ChampionService {

  constructor(private http:HttpClient) {}

  getWithUserId(id:number):Observable<Champions[]>{
    return this.http.get<Champions[]>("http://localhost:3000/champions?id_user="+id);
  }

  getById(id: number):Observable<any>{
    return this.http.get("http://localhost:3000/champions/" + id);
  }

  post(champion : Champions): Observable<Champions>{
    return this.http.post<Champions>("http://localhost:3000/champions", champion)
  }

  delete(id: number){
    return this.http.delete('http://localhost:3000/champions/'+id);
  }

  put(id: number, champion: Champions){
    return this.http.put('http://localhost:3000/champions/'+id, champion)
  }

}
