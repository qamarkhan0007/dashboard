import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupFramesComponent } from './lookup-frames.component';

describe('LookupFramesComponent', () => {
  let component: LookupFramesComponent;
  let fixture: ComponentFixture<LookupFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
