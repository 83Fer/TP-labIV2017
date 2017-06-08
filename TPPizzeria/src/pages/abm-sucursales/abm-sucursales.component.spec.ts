import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmSucursalesComponent } from './abm-sucursales.component';

describe('AbmSucursalesComponent', () => {
  let component: AbmSucursalesComponent;
  let fixture: ComponentFixture<AbmSucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmSucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
