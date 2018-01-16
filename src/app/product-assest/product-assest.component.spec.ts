import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAssestComponent } from './product-assest.component';

describe('ProductAssestComponent', () => {
  let component: ProductAssestComponent;
  let fixture: ComponentFixture<ProductAssestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductAssestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAssestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
