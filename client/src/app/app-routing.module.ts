import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { ErrorsComponent } from './shared/ui/errors/errors.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'errors',
        component: ErrorsComponent,
    },
    {
        path: 'list',
        canActivate: [AuthGuard],
        loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
    },
    {
        path: 'messages',
        canActivate: [AuthGuard],
        loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesModule),
    },
    {
        path: 'matches',
        canActivate: [AuthGuard],
        loadChildren: () => import('./matches/matches.module').then((m) => m.MatchesModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
