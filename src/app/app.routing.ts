import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},        
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
