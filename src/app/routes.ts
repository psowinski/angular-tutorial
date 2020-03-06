import { Routes } from '@angular/router';
import { DokiDetailsComponent } from './doki-details/doki-details.component';
import { DokiListComponent } from './doki-list/doki-list.component';

export const appRoutes: Routes = [
    { path: 'dokis', component: DokiListComponent },
    { path: 'dokis/:id', component: DokiDetailsComponent },
    { path: '', redirectTo: '/dokis', pathMatch: 'full' }
]