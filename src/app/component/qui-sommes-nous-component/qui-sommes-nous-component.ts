import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { QuiSommeNousService } from '../../services/qui-somme-nous-service';

@Component({
  selector: 'app-qui-sommes-nous-component',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './qui-sommes-nous-component.html',
  styleUrl: './qui-sommes-nous-component.scss',
})
export class QuiSommesNousComponent implements OnInit {
  private service = inject(QuiSommeNousService);
  monArticle = signal<any>(null);

  ngOnInit(): void {
    this.service.getArticleById(1).subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.monArticle.set(data[0]); 
        }
      },
      error: (err) => console.error(err)
    });
  }
}