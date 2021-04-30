import { Component, OnInit } from '@angular/core';
import { ChampionService } from './services/champion.service';

import { Champions } from '../shared/model/champions';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {

   champions: Champions[];

   dataSource = new ChampionDataSource(this.champion);
   displayedColumns = ['voir', 'nom', 'lv', 'hp', 'ap', 'action'];

  constructor(private champion:ChampionService, private route : Router) { }

  ngOnInit() {
    if(!sessionStorage.getItem("isLoginAs")){
      this.route.navigate(['/connexion']);
    }
  }

  deleteChampion(id: number): void {
    this.champion.delete(id).subscribe(res=>{
      this.dataSource = new ChampionDataSource(this.champion);
    });
  }
}

export class ChampionDataSource extends DataSource<any> {
  constructor(private championService: ChampionService) {
    super();
  }
  connect(): Observable<Champions[]> {
    return this.championService.getWithUserId(parseInt(sessionStorage.getItem("isLoginAs")));
  }
  disconnect() {}
}
