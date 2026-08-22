import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full' },
    {path: 'index', loadComponent: () => import('./component/index').then(m => m.Index) },   
    {path: 'about-asi', loadComponent: () => import('./component/about-asi/about-asi').then(m => m.AboutAsi) },
    {path: 'about-jhansi-circle', loadComponent: () => import('./component/about-jhansi-circle/about-jhansi-circle').then(m => m.AboutJhansiCircle) },
    {path: 'who-is-who', loadComponent: () => import('./component/who-is-who/who-is-who').then(m => m.WhoIsWho) },
    {path: 'monuments', loadComponent: () => import('./component/monuments/monuments').then(m => m.Monuments) },
    {path: 'act-rules', loadComponent: () => import('./component/act-rules/act-rules').then(m => m.ActRules) },
    {path: 'publications', loadComponent: () => import('./component/publication/publication').then(m => m.Publication) },
    {path: 'public-awareness', loadComponent: () => import('./component/public-awareness/public-awareness').then(m => m.PublicAwareness) },
    {path: 'gallery', loadComponent: () => import('./component/gallery/gallery').then(m => m.Gallery) },
    {path: 'video', loadComponent: () => import('./component/video/video').then(m => m.Video) },
    {path: 'public-information', loadComponent: () => import('./component/public-information/public-information').then(m => m.PublicInformation) },
     {path: 'contact-us', loadComponent: () => import('./component/contact-us/contact-us').then(m => m.ContactUs) },
     {path: '**', loadComponent: () => import('./component/not-found/not-found').then(m => m.NotFound) },
];
