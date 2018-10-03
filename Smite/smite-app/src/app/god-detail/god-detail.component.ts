import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { SmiteService } from '../smite.service';
import { God } from '../smite';

@Component({
  selector: 'app-god-detail',
  templateUrl: './god-detail.component.html',
  styleUrls: ['./god-detail.component.css']
})
export class GodDetailComponent implements OnInit {
  god$: Observable<God>;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SmiteService
  ) { }

  ngOnInit() {
    this.god$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getGod(params.get('name')))
    );
  }
  gotoGods(god: God) {
    const godName = god ? god.Name : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/gods', {name: godName}]);
  }

}
