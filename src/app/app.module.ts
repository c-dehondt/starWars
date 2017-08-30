import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { MyNewServiceService } from './my-new-service.service';

// New imports to update based on AngularFire2 version 4
import{HttpModule} from '@angular/http';
import { MyNewDetailleComponent } from './my-new-detaille/my-new-detaille.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNewDetailleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [MyNewServiceService],
  bootstrap: [AppComponent]
})

export class AppModule {}
