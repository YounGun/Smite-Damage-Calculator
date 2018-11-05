import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SmiteService } from './smite.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { GodDetailComponent } from './god-detail/god-detail.component';
import { GodListComponent } from './god-list/god-list.component';
import { ItemListComponent } from './item-list/item-list.component';
import { DamageCalculatorComponent } from './damage-calculator/damage-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'gods', component: GodListComponent },
  { path: 'gods/:name', component: GodDetailComponent },
  { path: 'items', component: ItemListComponent },
  { path: 'damage', component: DamageCalculatorComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    GodDetailComponent,
    GodListComponent,
    ItemListComponent,
    DamageCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: false, // <-- debugging purposes only
      }
    )
  ],
  providers: [ SmiteService ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    // Use a custom replacer to display function names in the route configs
    // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
