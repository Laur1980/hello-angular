import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToBeFormatedComponent } from './text-to-be-formated.component';

describe('TextToBeFormatedComponent', () => {
  let component: TextToBeFormatedComponent;
  let fixture: ComponentFixture<TextToBeFormatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToBeFormatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToBeFormatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
