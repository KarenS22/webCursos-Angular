import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreviewCourseComponent } from '../../components/preview-course/preview-course.component';
import { OnInit } from '@angular/core';
import { AddCourseService } from '../../services/add-course.service';


@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [CommonModule, PreviewCourseComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent  implements OnInit{

  cursoSeleccionado: any = null;
  
  courses = [
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
      description: 'Aprende a crear y gestionar sitios web usando WordPress, una de las plataformas más populares.',
      imageUrl: 'assets/15.png'
    },
    {
      id: 'p-6',
      title: 'Inglés Conversacional',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Mejora tu fluidez en inglés con lecciones prácticas de conversación y vocabulario cotidiano.',
      imageUrl: 'assets/16.png'
    },
    {
      id: 'p-7',
      title: 'Diseño Gráfico con Adobe Illustrator',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Domina las herramientas de Adobe Illustrator para crear ilustraciones vectoriales, logotipos y diseños  visualmente atractivos. Ideal para aspirantes a diseñadores gráficos o creativos digitales.',
      imageUrl: 'assets/17.png'
    },
    {
      id: 'p-8',
      title: 'Contabilidad Básica para Emprendedores',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Un curso diseñado para emprendedores y pequeños empresarios que necesitan entender los principios básicos de la contabilidad, como balance de cuentas, flujo de caja y gestión financiera.',
      imageUrl: 'assets/18.png'
    },
    {
      id: 'p-9',
      title: 'Animación 2D',
      profesor: 'Juan Perez',
      date: '05/10/2024',
      duration: 3,
      description: 'Aprende a crear animaciones en 2D utilizando software como Adobe Animate o Toon Boom.',
      imageUrl: 'assets/19.png'
    }
  ];  

  constructor(private addCourseService: AddCourseService) {} 

  ngOnInit(): void {
    this.courses = this.addCourseService.getCourses();
    
  }

  masInformacion(curso: any = {}) {
      this.cursoSeleccionado = curso;
      // console.log(this.cursoSeleccionado);
  }

  cerrarPreview(){
    this.cursoSeleccionado = null;
  }

}



