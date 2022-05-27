import { Component, OnInit } from '@angular/core';
import { AccountService } from './shared/data-access/account.service';
import { Observable } from 'rxjs';
import { IUser } from './shared/interfaces/user.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public user: Observable<IUser | null> = this.account.user;

    public constructor(private account: AccountService) {}

    public ngOnInit(): void {
        this.account.isAuthorized();
    }

    public onLogin(user: IUser) {
        this.account.login(user).subscribe();
    }

    public onLogout() {
        this.account.logout();
    }
}
