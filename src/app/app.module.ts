import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyNewServiceService } from './my-new-service.service';
import { TestBed, inject } from '@angular/core/testing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// New imports to update based on AngularFire2 version 4
import{HttpModule} from '@angular/http';
import { MyNewDetailleComponent } from './my-new-detaille/my-new-detaille.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ChoixComponent } from './choix/choix.component';

const appRoutes: Routes = [
  // {path:'', redirectTo:'accueil/', pathMatch:'full'},
  // { path: 'accueil', component:HeaderComponent},
  { path: 'accueil/:selection', component:ChoixComponent },
  { path: 'accueil/:mynewservice.categorieName/:detaille[mynewservice.infoNom]', component: MyNewDetailleComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MyNewDetailleComponent,
    HeaderComponent,
    NavComponent,
    ChoixComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
