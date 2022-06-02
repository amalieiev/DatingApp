import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ErrorsComponent } from './components/errors/errors.component';

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
        loadChildren: () => import('./pages/list/list.module').then((m) => m.ListModule),
    },
    {
        path: 'messages',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/messages/messages.module').then((m) => m.MessagesModule),
    },
    {
        path: 'matches',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/matches/matches.module').then((m) => m.MatchesModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
