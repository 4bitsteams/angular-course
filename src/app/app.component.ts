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

  imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==";
  data={
    title :'angular-course'
  };
  number=1;
  blogs=['blog post 1','blog post 2','blog pot 3','blog post 4','blog post 5'];

  blogPosts=[
        {Title:'Math',Description:'this book is Very Eeasy to Learn!!!',Author:'Rubel'},
        {Title:'Math 1',Description:'this book is Very Eeasy to Learn 1 !!!',Author:'Rubel 1'},
        {Title:'Math 2',Description:'this book is Very Eeasy to Learn 2 !!!',Author:'Rubel 2'}
  ];

  getTitle(){
    return this.data.title;
  }
  
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

  appComponentButtonClick(e:any){
    e.stopPropagation();
    this.number++;
    //alert('appComponentButtonClick Click ='+e);
  }
}
