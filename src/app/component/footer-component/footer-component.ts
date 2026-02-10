import { Component, OnInit, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent implements OnInit {
  private http = inject(HttpClient);
  
  articleContact = signal<any[]>([]);
  formSent = signal<boolean>(false);
  
  contactData = {
    prenom: '',
    nom: '',
    telephone: '',
    email: '',
    message: ''
  };

  ngOnInit(): void {
    this.http.get<any>('http://api-immobilier.osengo-tpdwwm-moulins.fr/article.php?id=2').subscribe(data => {
      this.articleContact.set(Array.isArray(data) ? data : [data]);
    });
  }

  submitForm() {
    this.formSent.set(true);
  }
}