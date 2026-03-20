import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CLIENTS } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-client-rail',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './client-rail.component.html',
  styleUrl: './client-rail.component.scss',
})
export class ClientRailComponent {
  protected readonly clients = [...CLIENTS, ...CLIENTS];
}
