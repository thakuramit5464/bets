import { Component,  OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit  ,OnDestroy{
// startIndex: number;
//   imageData = [
//   'assets/images/round1.jpg',
//   'assets/images/round2.jpg',
//   'assets/images/round3.jpg',
// ];


//   @Input() images: string[];

//   slideIndex: number = 0;

//   plusSlides(n: number) {
//     this.slideIndex += n;
//   }

// ngOnInit() {
//   this.Repeat();
// }

// Repeat() {
//   setTimeout(() => {
//     this.__FunctionSlide();
//     this.Repeat();
//   }, 2000);
// }

// __FunctionSlide() {
//   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
//   if (slides ) {
//     this.Repeat();
//   }
//   for (const x of slides) {
//     const y = x as HTMLElement;
//     y.style.display = 'none';
//   }
//   if (this.startIndex > slides.length - 1) {
//     this.startIndex = 0;
//     const slide = slides[this.startIndex] as HTMLElement;
//     slide.style.display = 'block';
//     this.startIndex++;
//   } else {

//     const slide = slides[this.startIndex] as HTMLElement;
//     slide.style.display = 'block';
//     this.startIndex++;
//   }
// }
images: string[] = [
  'round1.jpg',
  'round2.jpg',
  'round3.jpg',
  // Add more image filenames as needed
];

currentImageIndex = 0;
private destroy$: Subject<void> = new Subject();

constructor() { }

ngOnInit(): void {
  this.startAutoSlide();
}

ngOnDestroy(): void {
  this.destroy$.next();
  this.destroy$.complete();
}

showImage(index: number): void {
  this.currentImageIndex = index;
}

nextImage(): void {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
}

prevImage(): void {
  this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
}

private startAutoSlide(): void {
  interval(3000) // Change slide every 3 seconds (adjust as needed)
    .pipe(takeUntil(this.destroy$))
    .subscribe(() => {
      this.nextImage();
    });
}
}


