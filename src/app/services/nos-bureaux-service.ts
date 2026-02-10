import { Injectable, inject } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NosBureauxService {
  private http = inject(HttpClient);
  private url = 'http://api-immobilier.osengo-tpdwwm-moulins.fr';

  getOffres(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/offres.php`);
  }
}