import { Injectable } from '@angular/core';
import { UserLoginDto } from '../ui/nav/nav.component';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private readonly _user: BehaviorSubject<UserLoginDto | null> = new BehaviorSubject<UserLoginDto | null>(null);
    public readonly user: Observable<UserLoginDto | null> = this._user.asObservable();

    constructor(private http: HttpClient) {}

    public login(user: UserLoginDto): Observable<UserLoginDto> {
        return this.http.post<UserLoginDto>('https://localhost:5001/api/Account/Login', user).pipe(
            tap((response) => {
                localStorage.setItem('user', JSON.stringify(response));
                this._user.next(response);
            })
        );
    }

    public isAuthorized(): boolean {
        //TODO: use store service
        const userString = localStorage.getItem('user');

        if (!userString) return false;

        const user = JSON.parse(userString);

        this._user.next(user);

        return true;
    }

    public logout(): void {
        localStorage.removeItem('user');
        this._user.next(null);
    }
}
