import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHtkComponent } from './order-htk.component';

describe('OrderHtkComponent', () => {
  let component: OrderHtkComponent;
  let fixture: ComponentFixture<OrderHtkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHtkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHtkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
