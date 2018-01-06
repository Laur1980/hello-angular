import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'authors',
  template: `
            <h1>Authors</h1><br/>
              <ul *ngFor="let a of authors">
                <li>{{ a }}</li>
              </ul>
              <input  (keyup)="onKeyUp($event)" />
              <br>
              <!-- Alternative: filtering -->
              <!-- # creates a template variable -->
              <input #email2 (keyup.enter)="onKeyUp2(email2.value)" />
              <!-- input without template and with OOP atributes -->
              <br>
              <input [value]="email2" (keyup.enter)="onKeyUp3()" />
              <br>
              <button class="btn btn-danger" [class.active]="isActive">CLICK HERE!</button>
              <br>
              <button [style.backgroundColor]="isActive?'blue':'red'">BLA BLA</button>
              <br>
              <div (click)="onDivClick()">
                <button class="btn btn-primary" (click)="onSave($event)">Click for the change!</button>
              </div>
            `
})
export class AuthorsComponent implements OnInit {

  authors;
  isActive;
  backgroundColor;
  clickCounter;
  email2;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
    this.isActive = true;
    this.backgroundColor = "red";
    this.clickCounter = 0;
    this.email2 = "some@mail.com";
  }

  onKeyUp3(){
    console.log(this.email2);
  }

  onKeyUp2(email){
    console.log("Filtering for ENTER key is active!The value of the input field is: "+email);
  }

  onKeyUp($event){
    if($event.keyCode === 13)
        console.log("Enter was pressed! The value of the input field is: "+$event.target.value);

  }

  onDivClick(){
    console.log("Div clicked!");
  }

  onSave($event){
    $event.stopPropagation();
    console.log("The 3rd button was clicked "+ (++this.clickCounter) +" times!",$event);
  }

  ngOnInit() {
  }

}
