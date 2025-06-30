import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
 
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


