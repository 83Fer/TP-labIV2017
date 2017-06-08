import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbmPedidosComponent } from './abm-pedidos.component';

describe('AbmPedidosComponent', () => {
  let component: AbmPedidosComponent;
  let fixture: ComponentFixture<AbmPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbmPedidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbmPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
