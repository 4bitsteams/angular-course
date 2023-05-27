import { Component,Input,OnInit,Output,EventEmitter  } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

@Input() course!:Course;

@Output()
courseSelected=new EventEmitter<Course>();
  constructor(){
  }

  ngOnInit(){

  }

  OnViewImage(){
    console.log("Chield Selected");
    this.courseSelected.emit(this.course);
  }

}
