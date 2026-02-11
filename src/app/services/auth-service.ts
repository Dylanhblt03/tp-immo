import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  fetchJwtToken() {
    return this.http.get<{ token: string }>('http://api-immobilier.osengo-tpdwwm-moulins.fr/jwt-login.php').pipe(
      tap((response) => {
        localStorage.setItem('api_jwt', response.token);
      }),
    );
  }
  getToken(): string | null {
    return localStorage.getItem('api_jwt');
  }
  clearToken(): void {
    localStorage.removeItem('api_jwt');
  }
}
