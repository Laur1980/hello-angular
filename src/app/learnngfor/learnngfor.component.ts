import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'learnngfor',
  templateUrl: './learnngfor.component.html',
  styleUrls: ['./learnngfor.component.css']
})
export class LearnngforComponent implements OnInit {

  courses;

  constructor() { }

  onLoad(){
    this.courses=[
              {id:1, name:'course1'},
              {id:2, name:'course2'},
              {id:3, name:'course3'}
            ];
  }

  trackCourse(track,course){
    return course? course.id:undefined;
  }

  onAdd(){
    if(this.courses != undefined){
      let index = this.courses.length;
      let currentId = index+1;
      let currentName = 'course'+currentId;
      this.courses.push({
                          id:currentId,
                          name:currentName
                        });
    }else{
      this.courses=[{id:1,name:'course1'}];
    }
  }

  onRemove(i:number){
    this.courses.splice(i,1);
  }

  ngOnInit() {
  }

}
