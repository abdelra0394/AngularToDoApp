import { Component, OnInit } from '@angular/core';
import { Course } from '../Common/Models/course';
import { CoursesService } from '../Common/Services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses:Course[] = []

  emptyCourse:Course ={
    id:null,
    title:'',
    description:'',
    percentComplete:null,
    favorite:null
  }

  

  constructor(private service:CoursesService) { }

  ngOnInit(): void {
    this.Fetch();
  }

  Fetch(){
    this.service.all().subscribe( (res:any) => { this.courses = res;} )
  }
  selectedCourse = this.emptyCourse;
  originalTitle;
  SelectCourse(course){
    this.selectedCourse = {...course};
    this.originalTitle = this.selectedCourse.title;
  }


  saveCourse(course){
    if(course.id){
      this.UpateCourse(course);
    }
    else{
      this.CreateCourse(course);
    }
  }
  UpateCourse(course) {
    this.service.Update(course).subscribe((res:any) => {this.Fetch()});
  }
  CreateCourse(course) {
    this.service.Create(course).subscribe((res:any) => {this.Fetch()});
  }
  Delete(id:number){
    this.service.Delete(id).subscribe((res:any) => {this.Fetch()})
  }

  Reset(){
    this.SelectCourse({...this.emptyCourse})
  }
}


