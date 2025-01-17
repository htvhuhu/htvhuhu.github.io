import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CvComponent {
  isLoading = true;

  onIframeLoad() {
    this.isLoading = false;
  }
}
