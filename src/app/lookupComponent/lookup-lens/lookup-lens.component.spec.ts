import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupLensComponent } from './lookup-lens.component';

describe('LookupLensComponent', () => {
  let component: LookupLensComponent;
  let fixture: ComponentFixture<LookupLensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupLensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupLensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
