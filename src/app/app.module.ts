import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importar componentes creados
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
//importar servicio
import {DataService} from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
