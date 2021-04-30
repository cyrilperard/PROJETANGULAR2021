import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UtilisateursComponent } from './utilisateurs.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UtilisateursService } from './service/utilisateurs.service';
import { DeconnexionComponent } from './components/deconnexion/deconnexion.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [UtilisateursComponent, ConnexionComponent, DeconnexionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [
    UtilisateursComponent,
    ConnexionComponent,
    DeconnexionComponent
  ],
  providers: [
    UtilisateursService,
  ]
})
export class UtilisateursModule { }
