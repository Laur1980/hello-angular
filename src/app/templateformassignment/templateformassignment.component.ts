import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'templateformassignment',
  templateUrl: './templateformassignment.component.html',
  styleUrls: ['./templateformassignment.component.css']
})
export class TemplateformassignmentComponent implements OnInit {

  coursesTypes;

  constructor(service: FormserviceService) {
    this.coursesTypes = service.getCoursesTypes();
  }

  ngOnInit() {
  }

}
