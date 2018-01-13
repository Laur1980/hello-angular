import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learntraversal',
  templateUrl: './learntraversal.component.html',
  styleUrls: ['./learntraversal.component.css']
})
export class LearntraversalComponent implements OnInit {

  firstObject = {
                  someProperty:'property',
                  anotherObject:null};

  constructor() { }

  ngOnInit() {
  }

}
