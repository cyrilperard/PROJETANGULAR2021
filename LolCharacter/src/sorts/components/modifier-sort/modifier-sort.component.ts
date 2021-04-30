
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SortsService } from 'src/sorts/service/sorts.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { Sorts } from 'src/shared/model/sorts';

var id:number;
@Component({
  selector: 'app-modifier',
  templateUrl: './modifier-sort.component.html',
  styleUrls: ['./modifier-sort.component.scss']
})
export class ModifierSortComponent implements OnInit {
  constructor(public dialog: MatDialog, private route: Router) { }
  @Input() target:number;

  ngOnInit() {

  }

  openDialog(): void {
    id = this.target;
    const dialogRef = this.dialog.open(DialogOverviewModSortDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.route.navigate(['/sort']).then(()=>
            this.route.navigate(["champions/sorts/" + id ]));
    });
  }
}
@Component({
  selector: 'modifier-modal-sort',
  templateUrl: 'modifier-modal.html',
  styleUrls: ['./modifier-sort.component.scss']
})
export class DialogOverviewModSortDialog implements OnInit {
  registerForm: FormGroup;
  submitted: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewModSortDialog>, private formBuilder: FormBuilder, private service : SortsService, private route : Router) {}

    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        nom: ['', Validators.required],
        degat: ['', Validators.required],
        ratio: ['', Validators.required],
        description: ['', Validators.required],
      });

      this.service.getById(id).subscribe(sort => {
        this.registerForm.setValue({
          nom : sort.nom,
          degat : sort.degat,
          ratio : sort.ratio,
          description : sort.description,
        });
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


      this.service.put(id, new_sort)
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
