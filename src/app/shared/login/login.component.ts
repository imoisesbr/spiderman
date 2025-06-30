import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    name: string = '';
    age: number = 0;
    power: string = '';
    gender: string = '';
  
  
  
    submitHero() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.power);
      console.log(this.gender);
  
  
    }
  }
  


