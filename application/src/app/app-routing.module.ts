import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimsComponent } from './components/sims/sims.component';
import { PeopleInHauseComponent } from './components/people-in-house/people-in-hause.component';
import { PetsInNeighbourhoodComponent } from './components/pets-in-neighbourhood/pets-in-neighbourhood.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sims", component: SimsComponent},
  {path: "people-in-house", component: PeopleInHauseComponent},
  {path: "pets-is-neighbourhood", component: PetsInNeighbourhoodComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
