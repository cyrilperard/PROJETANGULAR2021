import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsComponent } from './champions.component';
import { HttpClientModule} from '@angular/common/http';
import { ChampionService } from './services/champion.service';
import { CreerComponent, DialogOverviewCreerDialog } from './component/creer/creer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CdkTableModule} from '@angular/cdk/table';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ModifierComponent, DialogOverviewModifierDialog } from './component/modifier/modifier.component';



@NgModule({
  declarations: [ChampionsComponent, CreerComponent, DialogOverviewCreerDialog, DialogOverviewModifierDialog, ModifierComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    ChampionsComponent,
  ],
  providers: [
    ChampionService
  ],
  entryComponents: [
    DialogOverviewCreerDialog,
    DialogOverviewModifierDialog
  ]
})
export class ChampionsModule { }
