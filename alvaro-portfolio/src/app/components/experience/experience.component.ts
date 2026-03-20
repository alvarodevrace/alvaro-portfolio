import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { EXPERIENCE } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  protected readonly experience = EXPERIENCE;
  protected readonly failedLogos = new Set<string>();

  protected badgeKey(path: string | undefined, fallback: string): string {
    return path ?? fallback;
  }

  protected logoFailed(key: string): boolean {
    return this.failedLogos.has(key);
  }

  protected onLogoError(key: string): void {
    this.failedLogos.add(key);
  }

  protected initials(company: string): string {
    return company
      .split(/[\s/]+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((chunk) => chunk[0]?.toUpperCase() ?? '')
      .join('');
  }
}
