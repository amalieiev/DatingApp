import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of, EMPTY } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { IUserAccount } from '../interfaces/user-account.interface';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private readonly _base = 'https://localhost:5001';

    private readonly _user: BehaviorSubject<IUserAccount | null> = new BehaviorSubject<IUserAccount | null>(null);
    public readonly user: Observable<IUserAccount | null> = this._user.asObservable();

    constructor(private http: HttpClient, private toaster: ToastrService) {}

    public login(user: IUser): Observable<IUserAccount> {
        return this.http.post<IUserAccount>(this._base + '/api/Account/Login', user).pipe(
            catchError((err) => {
                this.toaster.error(err.error);
                return EMPTY;
            }),
            tap((userAccount) => {
                this.setUser(userAccount);
                this.toaster.info('User logged in.');
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
        this.setUser(null);
        this.toaster.info('Log out success.');
    }

    public register(user: IUser): Observable<IUserAccount> {
        return this.http.post<IUserAccount>(this._base + '/api/Account/Register', user).pipe(
            tap((userAccount) => {
                this.setUser(userAccount);
                this.toaster.info('Registration completed!');
            })
        );
    }

    /**
     * Set or Remove user account
     *
     * @param userAccount
     * @private
     */
    private setUser(userAccount: IUserAccount | null) {
        if (userAccount) {
            localStorage.setItem('user', JSON.stringify(userAccount));
        } else {
            localStorage.removeItem('user');
        }

        this._user.next(userAccount);
    }
}
