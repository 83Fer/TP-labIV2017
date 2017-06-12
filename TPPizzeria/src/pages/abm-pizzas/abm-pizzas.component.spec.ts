import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPlatosComponent } from './abm-platos.component';

describe('AbmPlatosComponent', () => {
  let component: AbmPlatosComponent;
  let fixture: ComponentFixture<AbmPlatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmPlatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPlatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
