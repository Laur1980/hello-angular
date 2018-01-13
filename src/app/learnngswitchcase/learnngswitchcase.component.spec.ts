import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnngswitchcaseComponent } from './learnngswitchcase.component';

describe('LearnngswitchcaseComponent', () => {
  let component: LearnngswitchcaseComponent;
  let fixture: ComponentFixture<LearnngswitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnngswitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnngswitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
