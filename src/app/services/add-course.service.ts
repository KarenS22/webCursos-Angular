import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCourseService {

  private initialCourses = [
    {
      id: 'p-1',
      title: 'Diseño UX/UI',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Descubre cómo crear interfaces de usuario atractivas y mejorar la experiencia de usuario en aplicaciones y sitios web.',
      imageUrl: 'assets/11.png'
    },
    {
      id: 'p-2',
      profesor: 'Juan Perez',
      title: 'Redacción Académmica',
      date: '05/10/2024',
      duration: 3,
      description: 'Aprende a escribir ensayos, artículos y tesis de manera clara y profesional para el ámbito académico.',
      imageUrl: 'assets/12.png'
    },
    {
      id: 'p-3',
      title: 'Introducción a Big Data',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Conoce los principios de Big Data y cómo utilizar el análisis de grandes volúmenes de datos en diferentes sectores.',
      imageUrl: 'assets/13.png'
    },
    {
      id: 'p-4',
      title: 'JavaScript Básico',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Domina los fundamentos de JavaScript y empieza a desarrollar sitios web interactivos.',
      imageUrl: 'assets/14.png'
    },
    {
      id: 'p-5',
      title: 'Introducción a WordPress',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Aprende a crear sitios web profesionales con WordPress y personaliza plantillas para adaptarlas a tus necesidades.',
      imageUrl: 'assets/15.png'
    }

  ];

  constructor() { 
    if (!localStorage.getItem('courses')) {
      this.saveCourses(this.initialCourses);
    }
  }

  getCourses(): any[] {
    let courses = localStorage.getItem('courses');
    return courses ? JSON.parse(courses) : [];
  }

  saveCourses(courses: any[]) {
    localStorage.setItem('courses', JSON.stringify(courses));
    console.log('Courses saved');
  }

  addCourse(course: any) {
    let courses = this.getCourses();
    courses.push(course);
    this.saveCourses(courses);
  }
}
