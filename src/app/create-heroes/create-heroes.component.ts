import { Component } from '@angular/core';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-create-heroes',
  templateUrl: './create-heroes.component.html',
  styleUrls: ['./create-heroes.component.css']
})
export class CreateHeroesComponent {

  constructor(private heroesService: HeroesService) { }

  name: string = '';
  age: number = 0;
  power: string = '';
  gender: string = '';

  submitHero() {
    if (this.name === '' || this.age === 0 || this.power === '' || this.gender === '') {
      alert("Preencha todos os campos");
      return;
    }

    const hero = {
      name: this.name,
      age: this.age,
      power: this.power,
      gender: this.gender
    };

    this.heroesService.createHero(hero).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
