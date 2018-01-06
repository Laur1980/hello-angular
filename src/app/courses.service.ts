import { Component } from "@angular/core";

@Component({

})
export class CoursesService {
  courses=["courses1", "courses2", "courses3"];

  getCourses(){
    return this.courses;
  }
}
