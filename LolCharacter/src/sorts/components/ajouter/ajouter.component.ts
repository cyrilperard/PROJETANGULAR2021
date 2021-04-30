import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChampionService } from 'src/champions/services/champion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Champions } from 'src/shared/model/champions';
import { Sorts } from 'src/shared/model/sorts';
import { SortsService } from 'src/sorts/service/sorts.service';

var id:number;
@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service : SortsService, private route : Router, public dialog: MatDialog, public router:ActivatedRoute) { }


  ngOnInit() {
    id=this.router.snapshot.params.id;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewAjouterDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.route.navigate(['/sort']).then(()=>
            this.route.navigate(["champions/sorts/" + id ]));
    });
  }

}

@Component({
  selector: 'ajouter-modal',
  templateUrl: 'ajouter-modal.html',
  styleUrls: ['./ajouter.component.scss']
})
export class DialogOverviewAjouterDialog implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewAjouterDialog>, private formBuilder: FormBuilder,
    private service : SortsService, private route : Router, private router: ActivatedRoute) {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          nom: ['', Validators.required],
          degat: ['', Validators.required],
          ratio: ['', Validators.required],
          description: ['', Validators.required],
        });
    }

    get f() { return this.registerForm.controls; }

    onSubmit() {
      this.submitted=true;
      if (this.registerForm.invalid) {
        return;
      }
      new_sort: Sorts;
      let new_sort = new Sorts();

      new_sort.nom = this.registerForm.value.nom;
      new_sort.degat = this.registerForm.value.degat;
      new_sort.ratio = this.registerForm.value.ratio;
      new_sort.description = this.registerForm.value.description;
      new_sort.id_champion = id;

      this.service.post(new_sort)
        .subscribe({next:res => {
          this.route.navigate(['/sort']).then(()=>
            this.route.navigate(["champions/sorts/" + id ]));
        }
      });
      this.onNoClick();
    }
    onNoClick(): void {
      this.dialogRef.close();
  }

}

