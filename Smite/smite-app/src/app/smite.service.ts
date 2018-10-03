import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { God } from './smite';

@Injectable({
  providedIn: 'root'
})
export class SmiteService {
  smiteGodsUrl = '../assets/godsData.json';
  constructor(private http: HttpClient) { }

  getGods(): Observable<God[]> {
    return this.http.get<God[]>(this.smiteGodsUrl);
  }
  getGod(name: String): Observable<God> {
    return this.getGods().pipe(
      // (+) before `id` turns the string into a number
      map((gods: God[]) => gods.find(god => god.Name === name))
    );
  }

}


