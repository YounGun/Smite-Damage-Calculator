import { Component, OnInit } from '@angular/core';
import { SmiteService } from '../smite.service';
import { Item } from '../smite';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  providers: [ SmiteService ],
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  items: Item[];

  constructor(private smiteService: SmiteService) {
    this.getItems();
    console.log(this.items);
  }

  getItems(): void {
    this.smiteService.getItems()
      .subscribe(items => {
        const arr = Object.values(items);
        this.items = arr;
        console.log(this.items);
    });
  }
}

