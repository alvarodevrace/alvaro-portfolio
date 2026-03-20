import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled = false;
  readonly links = [
    { href: '#inicio', label: '// home' },
    { href: '#stack', label: '// expertise' },
    { href: '#projects', label: '// work' },
    { href: '#experience', label: '// experience' },
    { href: '#about', label: '// about' },
    { href: '#contact', label: '// contact' },
  ];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 24;
  }
}
