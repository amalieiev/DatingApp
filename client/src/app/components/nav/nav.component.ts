import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IUser } from '../../interfaces/user.interface';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
    public form: FormGroup = this.fb.group({
        username: '',
        password: '',
    });

    @Input()
    public username: string | null | undefined = null;

    @Output()
    public login: EventEmitter<IUser> = new EventEmitter<IUser>();

    @Output()
    public logout: EventEmitter<void> = new EventEmitter<void>();

    public constructor(private fb: FormBuilder) {}

    public ngOnInit(): void {}

    public onLogin(): void {
        const userData = this.form.getRawValue();
        this.login.emit(userData);
    }

    public onLogout(): void {
        this.logout.emit();
    }
}
