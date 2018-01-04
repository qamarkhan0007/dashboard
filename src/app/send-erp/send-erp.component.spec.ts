import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendErpComponent } from './send-erp.component';

describe('SendErpComponent', () => {
  let component: SendErpComponent;
  let fixture: ComponentFixture<SendErpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendErpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendErpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
