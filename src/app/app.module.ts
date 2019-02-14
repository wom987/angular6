import { BrowserModule } from '@angular/platform-browser';
import {RouterModule,Route} from '@angular/router';
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
import { AboutComponent } from './about/about.component';
import { NuevoComponent } from './nuevo/nuevo.component';
const routes:Route[]=[
  {path:'', component:HolaMundoComponent},
  {path:'about', component:NuevoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    UserComponent,
    NuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
