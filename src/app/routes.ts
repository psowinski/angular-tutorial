import { UserModule } from './user/user.module';
import { DokiListResolver } from './services/doki-list.resolver';
import { Routes } from '@angular/router';
import { DokiDetailsComponent } from './doki-details/doki-details.component';
import { DokiListComponent } from './doki-list/doki-list.component';

export const appRoutes: Routes = [
    { path: 'dokis', component: DokiListComponent, resolve: {dokidata: DokiListResolver} },
    { path: 'dokis/:id', component: DokiDetailsComponent },
    { path: 'dokiscategory/:id', component: DokiListComponent, resolve: {dokidata: DokiListResolver} },
    { path: '', redirectTo: '/dokis', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule'}
]
