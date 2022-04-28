import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: Array<Serie> = [];
  constructor(private courseService: CourseService) { }

  getCoursesList(): Array<Serie>{
    return dataSeries;
  }

  getCourses() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
}

 getTotalCredits(courses: Serie[]): number {
  let totalCredits: number = 0;
  let total:number = 0;
  courses.forEach((course) => totalCredits += totalCredits + course.seasons);
  return totalCredits;
}

  ngOnInit() {
    this.courses = this.getCoursesList();
  }

}
