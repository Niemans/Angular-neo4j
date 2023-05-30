import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SimsComponent } from './components/sims/sims.component';
import { SimsPathComponent } from './components/sims-path/sims.path.component';
import { SM } from './components/Siergiej-Marzena/SM.component';
import { JS } from './components/Julia-Siergiej/JS.component';
import { MHHL } from './components/Marzen-HH-Luca/MHHL.component';
import { MFCC } from './components/Monika-FC-Copper/MFCC.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "sims", component: SimsComponent},
  {path: "simsPath", component: SimsPathComponent},
  {path: "SM", component: SM},
  {path: "JS", component: JS},
  {path: "MHHL", component: MHHL},
  {path: "MFCC", component: MFCC},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
