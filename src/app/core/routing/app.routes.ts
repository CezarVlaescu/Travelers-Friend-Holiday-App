import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'homepage', loadComponent: () => import('../../components/homepage/homepage.component').then(m => m.HomepageComponent) },
    { path: '**', redirectTo: 'homepage', pathMatch: 'full' },
];
