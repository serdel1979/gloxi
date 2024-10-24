import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  
  screenIsLarge = false;
  isMenuVisible: boolean = false;

  isSearchVisible: boolean = false;

  title = 'goxi';


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
