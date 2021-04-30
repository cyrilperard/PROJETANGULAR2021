import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortsComponent } from './sorts.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { AjouterComponent, DialogOverviewAjouterDialog } from './components/ajouter/ajouter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SortsService } from './service/sorts.service';
import { DialogOverviewModSortDialog, ModifierSortComponent } from './components/modifier-sort/modifier-sort.component';

@NgModule({
  declarations: [SortsComponent, AjouterComponent, DialogOverviewAjouterDialog, DialogOverviewModSortDialog, ModifierSortComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    SortsComponent,
    AjouterComponent,
    ModifierSortComponent
  ],
  providers: [
    SortsService,
  ],
  entryComponents: [
    DialogOverviewAjouterDialog,
    DialogOverviewModSortDialog
  ]
})
export class SortsModule { }
