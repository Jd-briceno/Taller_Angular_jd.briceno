import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private apiUrl = environment.baseUrl + 'courses.json';

  constructor(private http: HttpClient) { }

getCourses(): Observable<Serie[]>{
  return this.http.get<Serie[]>(this.apiUrl);
}

}
