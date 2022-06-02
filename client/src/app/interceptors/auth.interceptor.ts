import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { AccountService } from '../shared/data-access/account.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public constructor(private account: AccountService) {}

    public intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this.account.user.pipe(
            switchMap((user) => {
                if (!user) return next.handle(request);

                const cloneRequest = request.clone({
                    headers: request.headers.set('Authorization', `Bearer ${user.token}`),
                });

                return next.handle(cloneRequest);
            })
        );
    }
}
