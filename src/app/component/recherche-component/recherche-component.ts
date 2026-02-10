import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RechercheService } from '../../services/recherche-service';

@Component({
  selector: 'app-recherche-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recherche-component.html',
  styleUrl: './recherche-component.scss',
})
export class RechercheComponent implements OnInit {
  rechercheService = inject(RechercheService);
  
  pageActuelle = signal(1);
  parPage = 6;

  ngOnInit(): void {
    if (this.rechercheService.resultats().length === 0) {
      this.rechercheService.rechercher({});
    }
  }

  offresAffichees = computed(() => {
    let debut = (this.pageActuelle() - 1) * this.parPage;
    return this.rechercheService.resultats().slice(debut, debut + this.parPage);
  });

  totalNombrePages = computed(() => 
    Math.ceil(this.rechercheService.resultats().length / this.parPage)
  );

  getImgUrl(url: string): string {
    if (!url) return 'images/cozy-dining-room-modern-apartment.jpg';
    return `http://api-immobilier.osengo-tpdwwm-moulins.fr/${url}`;
  }

  changerPage(page: number) {
    this.pageActuelle.set(page);
  }
}