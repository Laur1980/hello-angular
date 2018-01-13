import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearncustomdirectiveComponent } from './learncustomdirective.component';

describe('LearncustomdirectiveComponent', () => {
  let component: LearncustomdirectiveComponent;
  let fixture: ComponentFixture<LearncustomdirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearncustomdirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearncustomdirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
