import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private readonly _user: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);
    public readonly user: Observable<IUser | null> = this._user.asObservable();

    constructor(private http: HttpClient) {}

    public login(user: IUser): Observable<IUser> {
        return this.http.post<IUser>('https://localhost:5001/api/Account/Login', user).pipe(
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
