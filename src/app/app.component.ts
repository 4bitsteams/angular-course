import { Component } from '@angular/core';
import { COURSES } from './db_data';
import { Course } from './model/course';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //a=COURSES[0];
  //b=COURSES[1];
  //c=COURSES[2];
  //d=COURSES[3];
  //e=COURSES[4];

  courses=COURSES;

  data={
    title :'angular-course'
  };
  
  onLogoClick(){
    //alert('Hello World!');
  }

  onKeyUp(keyUpVal:string){
    this.data.title=keyUpVal;
  }

  OnClickEvent(){
    //alert("Hello App Component!");
  }

  onCourseSelected(course:Course){
    console.log("Parent Select Ok",course);
  }
}
