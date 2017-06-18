import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPizzasComponent } from './abm-pizzas.component';

describe('AbmPlatosComponent', () => {
  let component: AbmPizzasComponent;
  let fixture: ComponentFixture<AbmPizzasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmPizzasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
