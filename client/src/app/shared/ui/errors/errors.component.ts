import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-errors',
    templateUrl: './errors.component.html',
    styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent implements OnInit {
    constructor(private http: HttpClient) {}

    ngOnInit(): void {}

    getValidationError() {
        this.http.get('https://localhost:5001/api/buggy/auth').subscribe(console.log, console.log);
    }

    getAuthError() {
        this.http.get('https://localhost:5001/api/buggy/auth').subscribe(console.log, console.log);
    }

    getBadRequest() {
        this.http.get('https://localhost:5001/api/buggy/bad-request').subscribe(console.log, console.log);
    }

    get500() {
        this.http.get('https://localhost:5001/api/buggy/server-error').subscribe(console.log, console.log);
    }

    get404() {
        this.http.get('https://localhost:5001/api/buggy/not-found').subscribe(console.log, console.log);
    }
}
