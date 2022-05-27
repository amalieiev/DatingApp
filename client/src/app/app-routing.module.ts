import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users',
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    },
    {
        path: 'list',
        loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
    },
    {
        path: 'messages',
        loadChildren: () => import('./messages/messages.module').then((m) => m.MessagesModule),
    },
    {
        path: 'matches',
        loadChildren: () => import('./matches/matches.module').then((m) => m.MatchesModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
