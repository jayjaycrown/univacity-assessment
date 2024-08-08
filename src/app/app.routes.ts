import { Routes } from '@angular/router';
import { ProgramDetailsComponent } from './program-details/program-details.component';
import { ProgramsComponent } from './programs/programs.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'programs',
    pathMatch: 'full'
  },
  {
    path: 'programs',
    component: ProgramsComponent
  },
  {
    path: 'programs/:id',
    component: ProgramDetailsComponent
  }
];
