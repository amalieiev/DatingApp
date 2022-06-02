import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Observable } from 'rxjs';
import { IUser } from './interfaces/user.interface';
import { IUserAccount } from './interfaces/user-account.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public user: Observable<IUserAccount | null> = this.account.user;

    public constructor(private account: AccountService, private router: Router) {}

    public ngOnInit(): void {
        this.account.isAuthorized();
    }

    public onLogin(user: IUser) {
        this.account.login(user).subscribe(() => {
            this.router.navigateByUrl('/matches');
        });
    }

    public onLogout() {
        this.account.logout();
        this.router.navigateByUrl('/home');
    }
}
