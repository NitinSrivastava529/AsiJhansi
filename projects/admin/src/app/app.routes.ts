import { Routes } from '@angular/router';
import { authGuard } from './guard/auth-guard';

export const routes: Routes = [
    { path: '', loadComponent: () => import('./component/login/login').then(m => m.Login), pathMatch: 'full' },
    { path: 'login', loadComponent: () => import('./component/login/login').then(m => m.Login) },
    {
        path: '', loadComponent: () => import('./layout/layout').then(m => m.Layout), canActivate: [authGuard], children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadComponent: () => import('./component/dashboard/dashboard').then(m => m.Dashboard) },
            { path: 'gallery', loadComponent: () => import('./component/gallery/gallery').then(m => m.Gallery) },
            { path: 'video', loadComponent: () => import('./component/video/video').then(m => m.Video) },        
            { path: 'notification', loadComponent: () => import('./component/notification/notification').then(m => m.Notification) },        
        ]
    },
    { path: '**', loadComponent: () => import('./component/not-found/not-found').then(m => m.NotFound) }
];
