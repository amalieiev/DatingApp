import { Component } from '@angular/core';
import { UserLoginDto } from './shared/ui/nav/nav.component';
import { AuthService } from './shared/data-access/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    public constructor(private auth: AuthService) {}

    public onLogin(user: UserLoginDto) {
        this.auth.login(user);
    }
}
