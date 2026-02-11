import { Component, OnInit, inject, signal, ViewChild, ElementRef, ChangeDetectorRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NosBureauxService } from '../../services/nos-bureaux-service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-nos-bureaux-component',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './nos-bureaux-component.html',
  styleUrl: './nos-bureaux-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NosBureauxComponent implements OnInit {
  private service = inject(NosBureauxService);
  private cdr = inject(ChangeDetectorRef);

  @ViewChild('swiperEl') swiperRef!: ElementRef;
  offres = signal<any[]>([]);

  ngOnInit(): void {
    this.service.getOffres().subscribe(data => {
      this.offres.set(data);
      setTimeout(() => this.initSwiper(), 100);
    });
  }

  next() {
    this.swiperRef.nativeElement.swiper.slideNext();
  }

  prev() {
    this.swiperRef.nativeElement.swiper.slidePrev();
  }

  private initSwiper() {
    let swiperEl = this.swiperRef?.nativeElement;
    if (swiperEl) {
      let params = {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
          992: {
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }
      };
      Object.assign(swiperEl, params);
      swiperEl.initialize();
      this.cdr.detectChanges();
    }
  }
}