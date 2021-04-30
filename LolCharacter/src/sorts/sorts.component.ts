import { Component, OnInit } from '@angular/core';
import { ChampionService } from 'src/champions/services/champion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Champions } from 'src/shared/model/champions';
import { SortsService } from './service/sorts.service';
import { Sorts } from 'src/shared/model/sorts';

@Component({
  selector: 'app-sorts',
  templateUrl: './sorts.component.html',
  styleUrls: ['./sorts.component.scss']
})
export class SortsComponent implements OnInit {

  champion:Champions;
  sorts:Sorts[];
  constructor(private championService : ChampionService, private sortsService: SortsService,private route :ActivatedRoute, private router:Router) {
  }

  ngOnInit() {
    if(!sessionStorage.getItem("isLoginAs")){
      this.router.navigate(['/connexion']);
    }

    this.championService.getById(this.route.snapshot.params.id).subscribe(champion => {
      this.champion=champion;
    });
    this.sortsService.getWithChampId(this.route.snapshot.params.id)
      .subscribe(sorts => {
        this.sorts=sorts;
      });
  }

  delete(id: number): void {
    this.sortsService.delete(id).subscribe(res=>{
      this.ngOnInit();
    });
  }


}
