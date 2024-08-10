
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-api-url.com/auth'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {
          if (response.token) {
            localStorage.setItem('authToken', response.token);
            return true;
          }
          return false;
        }),
        catchError(() => of(false))
      );
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
