import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupstylesComponent } from './lookupstyles.component';

describe('LookupstylesComponent', () => {
  let component: LookupstylesComponent;
  let fixture: ComponentFixture<LookupstylesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupstylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupstylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
