import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Champions } from 'src/shared/model/champions';
import { Observable } from 'rxjs';
import { ChampionService } from 'src/champions/services/champion.service';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ChampionsComponent } from 'src/champions/champions.component';



  @Component({
    selector: 'app-creer',
    templateUrl: './creer.component.html',
    styleUrls: ['./creer.component.scss']
  })
export class CreerComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private service : ChampionService, private route : Router, public dialog: MatDialog) { }


  ngOnInit(){
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewCreerDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.route.navigate(['/champion']).then(()=>
        this.route.navigate(['/champions']));
    });
  }

}

@Component({
  selector: 'creer-modal',
  templateUrl: 'creer-modal.html',
  styleUrls: ['./creer.component.scss']
})
export class DialogOverviewCreerDialog implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewCreerDialog>, private formBuilder: FormBuilder, private service : ChampionService, private route : Router) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          // id: ['', Validators.required],
          nom: ['', Validators.required],
          lv: ['', Validators.required],
          hp: ['', Validators.required],
          ap: ['', Validators.required],
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted=true;
      if (this.registerForm.invalid) {
        return;
      }
      new_champion: Champions;
      let new_champion = new Champions();
      // new_champion.id = this.registerForm.value.id;
      new_champion.nom = this.registerForm.value.nom;
      new_champion.lv = this.registerForm.value.lv;
      new_champion.hp = this.registerForm.value.hp;
      new_champion.ap = this.registerForm.value.ap;
      new_champion.id_user = sessionStorage.getItem("isLoginAs");


      this.service.post(new_champion)
        .subscribe({next:res => {
          console.log(res);
          this.route.navigate(['/champion']).then(()=>
            this.route.navigate(['/champions']));
        }
      });
      this.onNoClick();
    }
    onNoClick(): void {
      this.dialogRef.close();
  }

}
