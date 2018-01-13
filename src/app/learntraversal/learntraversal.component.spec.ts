import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearntraversalComponent } from './learntraversal.component';

describe('LearntraversalComponent', () => {
  let component: LearntraversalComponent;
  let fixture: ComponentFixture<LearntraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearntraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearntraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
