import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Champions } from 'src/shared/model/champions';
import { ChampionService } from 'src/champions/services/champion.service';
import { Router } from '@angular/router';

var id:number = 1;
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.scss']
})
export class ModifierComponent implements OnInit {
  constructor(public dialog: MatDialog, private route: Router) { }
  @Input() target:number;

  ngOnInit() {
  }

  openDialog(): void {
    id = this.target;
    const dialogRef = this.dialog.open(DialogOverviewModifierDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.route.navigate(['/champion']).then(()=>
        this.route.navigate(['/champions']));
    });
  }
}
@Component({
  selector: 'modifier-modal',
  templateUrl: 'modifier-modal.html',
  styleUrls: ['./modifier.component.scss']
})
export class DialogOverviewModifierDialog implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewModifierDialog>, private formBuilder: FormBuilder, private service : ChampionService, private route : Router) {}

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        // id: ['', Validators.required],
        nom: ['', Validators.required],
        lv: ['', Validators.required],
        hp: ['', Validators.required],
        ap: ['', Validators.required],
      });

      this.service.getById(id).subscribe(champion => {
        this.registerForm.setValue({
          // id : champion.id,
          nom : champion.nom,
          lv : champion.lv,
          hp : champion.hp,
          ap : champion.ap,
        });
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
      new_champion.id = this.registerForm.value.id;
      new_champion.nom = this.registerForm.value.nom;
      new_champion.lv = this.registerForm.value.lv;
      new_champion.hp = this.registerForm.value.hp;
      new_champion.ap = this.registerForm.value.ap;
      new_champion.id_user = sessionStorage.getItem("isLoginAs");

      this.service.put(id, new_champion)
        .subscribe({next:res => {
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
