import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { Pregunta1Component } from './menu/pregunta1/pregunta1.component';
import { Pregunta2Component } from './menu/pregunta2/pregunta2.component';

export const routes: Routes = [
    { path: 'menu', component: MenuComponent,
        children:[
            { path: 'pregunta1', component: Pregunta1Component },
            { path: 'pregunta2', component: Pregunta2Component },
        ]
    },
    { path: '', redirectTo: 'menu', pathMatch: 'full' }
];
