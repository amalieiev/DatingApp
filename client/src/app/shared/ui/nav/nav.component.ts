import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

export interface UserLoginDto {
    username: string;
    password: string;
}

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
    public login: EventEmitter<UserLoginDto> = new EventEmitter<UserLoginDto>();

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
