import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {


    
  screenIsLarge = false;
  isMenuVisible: boolean = false;

  isSearchVisible: boolean = false;

  constructor() {
    this.onResize();
  }

  // Detectar si el tamaño de la pantalla es grande (md o superior)
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.screenIsLarge = window.innerWidth >= 768; // md en Tailwind es 768px
    if (this.screenIsLarge) {
      this.isSearchVisible = false; // Resetea la visibilidad del input si la pantalla es grande
    }
  }

  // Alternar la visibilidad del input de búsqueda en pantallas pequeñas





  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible;
  }
}
