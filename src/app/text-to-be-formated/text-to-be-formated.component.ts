import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'text-to-be-formated',
  templateUrl: './text-to-be-formated.component.html',
  styleUrls: ['./text-to-be-formated.component.css']
})
export class TextToBeFormatedComponent implements OnInit {

  textValue: string;

  constructor() {
    this.textValue="";
  }

  onInput($event){
    this.textValue=$event.target.value;
  }

  ngOnInit() {
  }

}
