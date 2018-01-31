import { Injectable } from '@angular/core';

@Injectable()
export class FormserviceService {

  private coursesTypes ;

  constructor() {
    this.coursesTypes = [
              {id:1, name:"Development"},
              {id:2, name:"Art"},
              {id:3, name:"Languages"}
            ];
  }

  submit(x){
    console.log(x);
  }

  getCoursesTypes(){
    return this.coursesTypes;
  }

}
