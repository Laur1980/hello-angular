import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnngforComponent } from './learnngfor.component';

describe('LearnngforComponent', () => {
  let component: LearnngforComponent;
  let fixture: ComponentFixture<LearnngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
