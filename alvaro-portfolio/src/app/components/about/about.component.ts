import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CLIENTS, OWNER } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  protected readonly owner = OWNER;
  protected readonly clients = CLIENTS;
}
