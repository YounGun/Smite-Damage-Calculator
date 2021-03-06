import { Component, OnInit } from '@angular/core';
import { SmiteService } from '../smite.service';
import { God } from '../smite';

@Component({
  selector: 'app-god-list',
  templateUrl: './god-list.component.html',
  providers: [ SmiteService ],
  styleUrls: ['./god-list.component.css']
})
export class GodListComponent {
  title = 'Smite';
  gods: God[];

  constructor(private smiteService: SmiteService) {
    this.getGods();
    console.log(this.gods);
  }

  getGods(): void {
    this.smiteService.getGods()
      .subscribe(gods => {
        const arr = Object.values(gods);
        this.gods = arr;
        console.log(this.gods);
    });
   }
}
