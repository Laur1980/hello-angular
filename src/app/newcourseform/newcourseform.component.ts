import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormArray, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'newcourseform',
  templateUrl: './newcourseform.component.html',
  styleUrls: ['./newcourseform.component.css']
})
export class NewcourseformComponent implements OnInit {
/*
  form = new FormGroup({
    topics: new FormArray([]),
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    })
  });
*/
form;
  addElement(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  remove(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      contact: fb.group({
        phone:[],
        email: []
      }),
      topics: fb.array([])
    });
  }

  ngOnInit() {
  }

}
