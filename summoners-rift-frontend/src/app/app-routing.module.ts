import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ChampionshipComponent } from './views/championship/championship.component';
import { RegisterComponent } from './views/register/register.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent,
  },
  {
  path: "register",
  component: RegisterComponent,
  },
  {
  path: "championship",
  component: ChampionshipComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
