import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  constructor() { }

  log(x){
    console.log(x);
    let firstName = x.control.value;
    console.log(firstName);
  }

}
