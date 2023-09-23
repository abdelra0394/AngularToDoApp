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

  courses : Course[] = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript Fundamentals',
      description: 'Learn the fundamentals of JavaScript',
      percentComplete: 46,
      favorite: true
    }
  ];

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
