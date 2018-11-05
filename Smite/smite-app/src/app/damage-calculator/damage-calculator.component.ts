import { Component } from '@angular/core';
import { SmiteService } from '../smite.service';
import { God } from '../smite';
import { Player } from './player';
import { Item } from '../smite';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-damage-calculator',
  templateUrl: './damage-calculator.component.html',
  styleUrls: ['./damage-calculator.component.css']
})

export class DamageCalculatorComponent {
  items: Item[];
  title = 'Smite';
  gods: God[];
  DPS: number;
  currentPlayer = new Player(12, 1, 20);
  selectedGod: string;
  basePower: number;

  constructor(private smiteService: SmiteService) {
    this.getGods();
    console.log(this.gods);
    this.getItems();
    console.log(this.items);
  }

  getGods(): void {
    this.smiteService.getGods()
      .subscribe(gods => {
        const arr = Object.values(gods);
        this.gods = arr;
        console.log(this.gods);
    });
   }
   getItems(): void {
    this.smiteService.getItems()
      .subscribe(items => {
        const arr = Object.values(items);
        this.items = arr;
        console.log(this.items);
    });
  }
  calculateDamage() {
    let godArr;
    let baseDamage;
    let damagePerLevel;

    // Get God from selection
    for (let i = 0; i < this.gods.length; i++) {
      if (this.selectedGod === this.gods[i].Name) {
        godArr = i;
      }
    }
    const god = this.gods[godArr];

    // Get Base Physical Damage Freom God and Player Level
    if ( god.PhysicalPower !== 0) {
      baseDamage = god.PhysicalPower;
      damagePerLevel = god.PhysicalPowerPerLevel;
    } else {
      baseDamage = 0.2 * god.MagicalPower;
      damagePerLevel =  0.2 * god.MagicalPowerPerLevel;
    }
    const selectedLevel = parseInt((<HTMLInputElement>document.getElementById('selectedLevel')).value, 10);

    this.DPS = baseDamage + (selectedLevel * damagePerLevel);
  }
}
