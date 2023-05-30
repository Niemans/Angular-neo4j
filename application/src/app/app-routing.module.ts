import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimsComponent } from './components/sims/sims.component';
import { ShortestPathComponent } from './components/shortest-path/shortest-path.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sims", component: SimsComponent},
  {path: "shortest", component: ShortestPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
