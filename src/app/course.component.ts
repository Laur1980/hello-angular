import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `

            <h2>{{ "Title: "+getTitle() }}</h2>
            <h1 [textContent]="title"></h1>
              <ul>
                <li *ngFor="let course of courses">{{ course }}</li>
              </ul>
              <img src="{{imgUrl}}" />
              <img [src]="title" />
              <table>
                <tr>
                  <td [attr.colSpan]="colSpan"></td>
                </tr>
              </table>
            `
})
export class CoursesComponent {

    title ="List of courses!";
    courses;
    imgUrl="http://lorempixel.com/400/200";
    colSpan=2;

    constructor (service: CoursesService) {
      this.courses = service.getCourses();//the service must be first registered in app.module.ts
    }

    getTitle() {
      return this.title;
    }
}
