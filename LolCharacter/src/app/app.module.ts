import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from 'src/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ChampionsModule } from 'src/champions/champions.module';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { UtilisateursModule } from 'src/utilisateurs/utilisateurs.module';
import { SortsModule } from 'src/sorts/sorts.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ChampionsModule,
    UtilisateursModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    UtilisateursModule,
    SortsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
