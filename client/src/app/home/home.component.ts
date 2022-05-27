import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../shared/interfaces/user.interface';
import { AccountService } from '../shared/data-access/account.service';
import { IHttpError } from '../shared/interfaces/http-error.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public registerMode = false;

    public form: FormGroup = this.fb.group({
        username: '',
        password: '',
    });

    public errors: string[] = [];

    public constructor(private fb: FormBuilder, private account: AccountService) {}

    public ngOnInit(): void {}

    public onToggleRegister() {
        this.registerMode = true;
    }

    public onRegister() {
        const user: IUser = this.form.getRawValue();

        this.account.register(user).subscribe({
            error: (error) => {
                this.showError(error);
            },
        });
    }

    private showError(error: IHttpError) {
        if (error.error) {
            this.errors = [error.error];
        }
        if (error.errors) {
            this.errors = Object.entries(error.errors).map(([name, value]) => {
                return value[0];
            });
        }
    }
}
