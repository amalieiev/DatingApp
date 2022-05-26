import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

interface IUser {
    id: number;
    userName: string;
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
    public users = this.http.get<IUser[]>('https://localhost:5001/api/users');

    public constructor(private http: HttpClient) {}
}
