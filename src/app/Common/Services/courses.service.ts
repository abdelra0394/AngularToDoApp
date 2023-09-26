import { Injectable } from '@angular/core';
import { Course } from '../Models/course';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  model = 'courses';

  constructor(private http:HttpClient) { }

  private getUrl(){
    return `${API_URL}/${this.model}`
  }
  private getUrlWithId(id:number){
    return `${this.getUrl()}/${id}`
  }

  all(){
    return this.http.get(this.getUrl());
  }

  Create(course:Course){
    return this.http.post(this.getUrl(),course);
  }

  Update(course:Course){
    return this.http.put(this.getUrlWithId(course.id),course);
  }

  Delete(id:number){
    return this.http.delete(this.getUrlWithId(id));
  }
}
