import { Injectable } from '@angular/core';
import { UserLoginDto } from '../ui/nav/nav.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor(private http: HttpClient) {}

    public login(user: UserLoginDto) {
        this.http.post('https://localhost:5001/api/Account/Login', user).subscribe(console.log);
    }
}
