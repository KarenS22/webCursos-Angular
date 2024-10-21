import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionImagenesService } from '../../services/gestion-imagenes.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview-course.component.html',
  styleUrl: './preview-course.component.css'
})
export class PreviewCourseComponent implements OnInit {

  @Input() cursoSeleccionado: any;

  @Output() cerrar = new EventEmitter<void>();

  cerrarPreview(){
    this.cerrar.emit();
  }

  datos: any
  constructor(private gestionImagenes: GestionImagenesService ) { 

  }

  ngOnInit(): void {
    this.datos = this.gestionImagenes.retornar().subscribe(
      data => {
        this.datos = data.results[0];
        // console.log(this.datos);
      }
    );
  }




  

  
}
