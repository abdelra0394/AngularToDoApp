import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/Common/Models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent {

  selectedCourse:Course;
  originalTitle = '';
  @Input() set Course(value){
    if(!value)
      return;
    this.selectedCourse = {...value}
    this.originalTitle = this.selectedCourse.title
  };
  @Output() saveCourse = new EventEmitter();
  @Output() cancelled = new EventEmitter();

}
