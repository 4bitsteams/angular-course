import { Component,Input,OnInit,Output,EventEmitter  } from '@angular/core';
import { Course } from '../model/course';
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  todate=new Date(2023,0,1);
@Input() course!:Course;
@Input() cardIndex:number=0;

@Output('courseSelected')

courseSelected=new EventEmitter<Course>();
  constructor(){
  }

  ngOnInit(){

  }

  OnViewImage(){
    console.log("Chield Selected");
    this.courseSelected.emit(this.course);
  }

  isValidCourse(){
    return this.course && this.course.id==1;
  }

  cardClasses() {
     let outVar='';
      if(this.course.id==1){
        outVar= 'btn btn-warning';
      }
      return outVar;
  }

  styleUnderline(){
    return "{'text-decoration':'underline'}";
  }

}
