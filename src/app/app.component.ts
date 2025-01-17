import { Renderer2 } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnDestroy {
  private clickListener: () => void;

  closeMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
      navbarCollapse.classList.remove('show');
    }
  }
  constructor(private renderer: Renderer2) {
    this.clickListener = this.renderer.listen('document', 'click', (event:any) => {
      this.handleOutsideClick(event);
    });
  }

  toggleMenu() {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse) {
      navbarCollapse.classList.toggle('show');
    }
  }

  handleOutsideClick(event: Event) {
    const navbar = document.querySelector('.navbar');
    const toggler = document.querySelector('.navbar-toggler');

    if (
      !navbar?.contains(event.target as Node) &&
      !toggler?.contains(event.target as Node)
    ) {
      const navbarCollapse = document.getElementById('navbarNav');
      if (navbarCollapse?.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    }
  }

  ngOnDestroy(): void {
    this.clickListener(); // Cleanup the event listener
  }

  title = 'Hong Huan Nguyen Portfolio';
}
