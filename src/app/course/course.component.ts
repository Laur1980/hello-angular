import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  template: `
              <h3>title: {{course.title | uppercase | lowercase}}<br></h3>
              <h3>ratings: {{course.ratings | number}}<br></h3>
              <h3>number of stundents: {{course.students | number:'1.1-1'}}<br></h3>
              <h3>price: {{course.price | currency:'EUR'}}<br></h3>
              <h3>the realease date: {{course.releaseDate | date:'short'}}</h3>
              <h3>{{course.bodyText | summary}}</h3>
            `
})
export class CourseComponent implements OnInit {
  course = {
            title:"The Incredible course",
            ratings: 4.56565,
            students: 5434,
            price: 190.95,
            releaseDate: new Date(2018,1,1),
            bodyText:'Extremly futile text that has to be written!'
          };
  constructor() { }

  ngOnInit() {
  }

}
