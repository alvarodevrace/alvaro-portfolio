import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { STACK } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.scss',
})
export class StackComponent {
  protected readonly stack = STACK;
}
