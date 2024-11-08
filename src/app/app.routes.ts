import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    {path: 'home', loadComponent: ()=> import('./pages/home/home.component').then((c)=>c.HomeComponent)},
    {path: 'login', loadComponent: ()=> import('./pages/login/login.component').then((c)=>c.LoginComponent)},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];
