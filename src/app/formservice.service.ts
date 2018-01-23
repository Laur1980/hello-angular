import { Injectable } from '@angular/core';

@Injectable()
export class FormserviceService {

  coursesType ;

  constructor() {
    this.coursesType = [
              {id:1, name:"Development"},
              {id:2, name:"Art"},
              {id:3, name:"Languages"}
            ];
  }

}
