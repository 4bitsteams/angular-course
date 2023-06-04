import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseDepartmentComponent } from './course-department/course-department.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogService } from './blog.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseDepartmentComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
