import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmReservasComponent } from './abm-reservas.component';

describe('AbmReservasComponent', () => {
  let component: AbmReservasComponent;
  let fixture: ComponentFixture<AbmReservasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmReservasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
