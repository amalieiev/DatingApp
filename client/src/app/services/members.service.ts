import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

interface Photo {
    id: string;
    url: string;
}

interface Member {
    id: string;
    username: string;
    avatar: string;
    photos: Photo[];
}

@Injectable({
    providedIn: 'root',
})
export class MembersService {
    public constructor(private http: HttpClient) {}

    public getMembers(): Observable<Member[]> {
        return this.http.get<Member[]>(environment.baseUrl + '/api/users');
    }

    public getMemberByUsername(username: string): Observable<Member> {
        return this.http.get<Member>(environment.baseUrl + `/api/users/${username}`);
    }
}
