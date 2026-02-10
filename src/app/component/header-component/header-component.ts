import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { HeaderService } from '../../services/header-service'; 
import { RechercheService } from '../../services/recherche-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule], 
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss'
})
export class HeaderComponent implements OnInit {
  private service = inject(HeaderService);
  private rechercheService = inject(RechercheService);
  private router = inject(Router);
  
  types = signal<any[]>([]);
  villes = signal<any[]>([]);
  offres = signal<any[]>([]);

  selection = {
    type: '',
    ville: '',
    budget: ''
  };

  ngOnInit(): void {
    this.service.getTypes().subscribe({
      next: (data) => this.types.set(data),
      error: (err) => console.error(err)
    });

    this.service.getVilles().subscribe({
      next: (data) => this.villes.set(data),
      error: (err) => console.error(err)
    });

    this.service.getOffres().subscribe({
      next: (data) => this.offres.set(data),
      error: (err) => console.error(err)
    });
  }

  lancerRecherche(): void {
    this.rechercheService.rechercher({...this.selection});
    this.router.navigate(['/recherche']);
  }
}