import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HeaderService {
  private http = inject(HttpClient);
  private url = 'http://api-immobilier.osengo-tpdwwm-moulins.fr';

  getTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/types.php`);
  }

  getVilles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/villes.php`);
  }

  getOffres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/offres.php`);
  }
}