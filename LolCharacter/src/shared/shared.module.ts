import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NotfoundComponent } from './component/notfound/notfound.component';



@NgModule({
  declarations: [ToolbarComponent, SidebarComponent, NotfoundComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    ToolbarComponent,
    SidebarComponent,
    NotfoundComponent,
  ]
})
export class SharedModule { }
