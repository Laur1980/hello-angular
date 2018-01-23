import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateformassignmentComponent } from './templateformassignment.component';

describe('TemplateformassignmentComponent', () => {
  let component: TemplateformassignmentComponent;
  let fixture: ComponentFixture<TemplateformassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateformassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateformassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
