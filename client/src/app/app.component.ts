import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from './shared/ui/nav/nav.component';
import { AuthService } from './shared/data-access/auth.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    public user: Observable<UserLoginDto | null> = this.auth.user;

    public constructor(private auth: AuthService) {}

    public ngOnInit(): void {
        this.auth.isAuthorized();
    }

    public onLogin(user: UserLoginDto) {
        this.auth.login(user).subscribe();
    }

    public onLogout() {
        this.auth.logout();
    }
}
