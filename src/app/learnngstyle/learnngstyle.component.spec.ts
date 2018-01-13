import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnngstyleComponent } from './learnngstyle.component';

describe('LearnngstyleComponent', () => {
  let component: LearnngstyleComponent;
  let fixture: ComponentFixture<LearnngstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnngstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
