import { Component, OnInit } from '@angular/core';
import { Course } from '../Common/Models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  emptyCourse:Course ={
    id:null,
    title:'',
    description:'',
    percentComplete:null,
    favorite:null
  }

  

  constructor() { }

  ngOnInit(): void {
  }

  selectedCourse = this.emptyCourse;
  originalTitle;
  SelectCourse(course){
    this.selectedCourse = {...course};
    this.originalTitle = this.selectedCourse.title;
  }


  saveCourse(course){

  }

  Reset(){
    this.SelectCourse({...this.emptyCourse})
  }
}
