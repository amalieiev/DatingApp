import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from './shared/ui/nav/nav.component';
import { AccountService } from './shared/data-access/account.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public user: Observable<UserLoginDto | null> = this.account.user;

    public constructor(private account: AccountService) {}

    public ngOnInit(): void {
        this.account.isAuthorized();
    }

    public onLogin(user: UserLoginDto) {
        this.account.login(user).subscribe();
    }

    public onLogout() {
        this.account.logout();
    }
}
