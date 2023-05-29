import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimsComponent } from './components/sims/sims.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sims", component: SimsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
