import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Learn.NgifComponent } from './learn.ngif.component';

describe('Learn.NgifComponent', () => {
  let component: Learn.NgifComponent;
  let fixture: ComponentFixture<Learn.NgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Learn.NgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Learn.NgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
