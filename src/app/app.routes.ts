import { Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { ContenidoComponent } from './pages/contenido/contenido.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path: 'pages/header',
        component: HeaderComponent
    },
    {
        path: 'pages/contenido',
        component: ContenidoComponent
    },
    {
        path: 'pages/add-course',
        component: AddCourseComponent
    },
    { path: '', redirectTo: 'contenido', pathMatch: 'full' },
    {
        path: 'pages/contacto',
        component: ContactComponent
    }

];
