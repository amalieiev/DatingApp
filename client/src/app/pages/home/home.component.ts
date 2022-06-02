import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';
import { AccountService } from '../../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

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

    public constructor(
        private fb: FormBuilder,
        private account: AccountService,
        private toaster: ToastrService,
        private router: Router
    ) {}

    public ngOnInit(): void {}

    public onToggleRegister() {
        this.registerMode = true;
    }

    public onRegister() {
        const user: IUser = this.form.getRawValue();

        this.account.register(user).subscribe({
            next: (user) => {
                this.router.navigateByUrl('/matches');
            },
            error: (error) => {
                this.toaster.error(error.error);
            },
        });
    }

    public onCancel() {
        this.registerMode = false;
    }
}
