import { Injectable } from '@angular/core';
import { Course } from '../Models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

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
}
