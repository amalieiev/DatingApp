import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public users = this.http.get('https://localhost:5001/api/users');

  public constructor(private http: HttpClient) {}
}
