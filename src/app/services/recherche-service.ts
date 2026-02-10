import { Injectable, inject, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RechercheService {
  private http = inject(HttpClient);
  private apiUrl = 'http://api-immobilier.osengo-tpdwwm-moulins.fr/offres.php';

  resultats = signal<any[]>([]);

  rechercher(filtres: any) {
    let params = new HttpParams();
    
    if (filtres.type && filtres.type !== "") {
      params = params.set('id_type', filtres.type);
    }
    if (filtres.ville && filtres.ville !== "") {
      params = params.set('ville', filtres.ville);
    }
    if (filtres.budget && filtres.budget !== "") {
      params = params.set('prix', filtres.budget);
    }

    this.http.get<any[]>(this.apiUrl, { params }).subscribe({
      next: (data) => {
        this.resultats.set(Array.isArray(data) ? data : []);
      },
      error: (err) => {
        this.resultats.set([]);
      }
    });
  }
}