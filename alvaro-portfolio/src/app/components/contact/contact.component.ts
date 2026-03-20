import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { OWNER } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  protected readonly owner = OWNER;
}
