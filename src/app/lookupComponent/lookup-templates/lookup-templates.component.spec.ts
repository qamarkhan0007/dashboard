import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupTemplatesComponent } from './lookup-templates.component';

describe('LookupTemplatesComponent', () => {
  let component: LookupTemplatesComponent;
  let fixture: ComponentFixture<LookupTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookupTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
