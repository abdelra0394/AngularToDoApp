import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from 'src/app/Common/Models/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent  {

@Input()  courses : Course[]=[];
@Output() SelectedCourse = new EventEmitter();
@Output() Delete: EventEmitter<number> = new EventEmitter<number>(); 

}
