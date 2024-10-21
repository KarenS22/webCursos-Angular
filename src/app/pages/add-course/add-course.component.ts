import { Component } from '@angular/core';
import { AddCourseService } from '../../services/add-course.service';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent {
  course: any = {
    title: '',
    profesor: '',
    date: '',
    duration: 0,
    description: '',
    imageUrl: "assets/newCourse.png"
  };

  constructor(private addCourseService: AddCourseService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const newCourse = {
        id: `p-${Date.now()}`,  
        ...this.course 
      };

      this.addCourseService.addCourse(newCourse);

      form.resetForm();

      console.log('Curso agregado:', newCourse);
    }
  }
}
