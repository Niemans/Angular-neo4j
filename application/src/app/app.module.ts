import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatListModule } from '@angular/material/list'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSelectModule } from '@angular/material/select'
import { MatTableModule } from '@angular/material/table'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SimsComponent } from './components/sims/sims.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PeopleInHauseComponent } from './components/people-in-house/people-in-hause.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PetsInNeighbourhoodComponent } from './components/pets-in-neighbourhood/pets-in-neighbourhood.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimsComponent,
    NavigationBarComponent,
    PeopleInHauseComponent,
    PetsInNeighbourhoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
