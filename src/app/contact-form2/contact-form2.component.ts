import { Component } from '@angular/core';

@Component({
  selector: 'contact-form2',
  templateUrl: './contact-form2.component.html',
  styleUrls: ['./contact-form2.component.css']
})
export class ContactForm2Component  {

  contactMethods =[
                  {id:1,value:'method 1'},
                  {id:2,value:'method 2'},
                  {id:3,value:'method 3'},
                  {id:4,value:'method 4'},
                   ];

  constructor() { }

  log($event,firstName){
    console.log("Change has happened! ",$event);
    console.log("+++++++++++++++++++++++++++++++++++");
    console.log(firstName);
  }

  submit(f){
    console.log(f);
    console.log("FirstName: "+f.value.firstName);
    console.log("Comment: "+f.value.comment);
  }

}
