import { Component } from '@angular/core';

import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts =[];
  users:string[]=['Maria', 'Juan','Pedro','Manuel','Daniela','Diego'];
  name:string='Jose Pemiticualo ';
  age:number=44;
  
  constructor(private dataService:DataService)
 {
   this.dataService.getData().subscribe(data=>{
     this.posts = data; 
   });
 }
 deleteUser(user){
  for (let i = 0; i < this.users.length; i++) {
    if(user==this.users[i]){
      this.users.splice(i,1);
    }
    
  }
 }
 addUser(newUser){
  this.users.push(newUser.value);
  newUser.value="";
  newUser.focus();
   return false;
 }



}
