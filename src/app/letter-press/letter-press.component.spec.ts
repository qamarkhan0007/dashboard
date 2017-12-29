import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPressComponent } from './letter-press.component';

describe('LetterPressComponent', () => {
  let component: LetterPressComponent;
  let fixture: ComponentFixture<LetterPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
