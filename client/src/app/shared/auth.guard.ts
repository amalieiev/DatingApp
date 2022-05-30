import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AccountService } from './data-access/account.service';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    public constructor(private account: AccountService, private router: Router) {}
    canActivate(): Observable<boolean | UrlTree> {
        return this.account.user.pipe(
            map((user) => {
                if (user) return true;
                return this.router.createUrlTree(['/home']);
            })
        );
    }
}
