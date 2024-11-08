import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'Gloxi';

  showHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      // Oculta el header si la ruta es '/login'
      this.showHeader = this.router.url !== '/login';
    });
  }




}
