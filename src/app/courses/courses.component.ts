import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
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

  selectedCourse = null;
  SelectCourse(course){
    this.selectedCourse = course;
  }

}
