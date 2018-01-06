import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  template: `
              <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>
            `
})
export class TestComponent implements OnInit {

  email;

  constructor() {
      this.email="email@mail.ro";
  }

  onKeyUp(){
    console.log(this.email);
  }

  ngOnInit() {
  }

}
