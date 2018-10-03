import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GodListComponent } from './god-list.component';

describe('GodListComponent', () => {
  let component: GodListComponent;
  let fixture: ComponentFixture<GodListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GodListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
