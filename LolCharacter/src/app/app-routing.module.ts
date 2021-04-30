import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChampionsComponent } from 'src/champions/champions.component';
import { NotfoundComponent } from 'src/shared/component/notfound/notfound.component';
import { CreerComponent } from 'src/champions/component/creer/creer.component';
import { ConnexionComponent } from 'src/utilisateurs/components/connexion/connexion.component';
import { SortsComponent } from 'src/sorts/sorts.component';




const routes: Routes = [
  {
    path: '',
    redirectTo:'champions',
    pathMatch:'full',
  },
  // {
  //   path: '**',
  //   redirectTo:'404',
  //   pathMatch:'full',
  // },
  {
    path: 'champions',
    component:ChampionsComponent,
  },
  {
    path: 'connexion',
    component:ConnexionComponent,
  },
  {
    path: 'champions/sorts/:id',
    component:SortsComponent,
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
