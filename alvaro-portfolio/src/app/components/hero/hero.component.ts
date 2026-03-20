import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  NgZone,
  OnDestroy,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import gsap from 'gsap';
import { CLIENTS, OWNER } from '../../core/portfolio.data';
import { ScrollRevealDirective } from '../../shared/scroll-reveal/scroll-reveal.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroCopy') private heroCopy?: ElementRef<HTMLElement>;
  @ViewChild('heroPanel') private heroPanel?: ElementRef<HTMLElement>;

  protected readonly owner = OWNER;
  protected readonly clients = CLIENTS;
  protected activeTitle = '';

  private readonly browser: boolean;
  private titleIndex = 0;
  private charIndex = 0;
  private deleting = false;
  private typingTimer?: ReturnType<typeof window.setTimeout>;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly zone: NgZone,
  ) {
    this.browser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.browser) {
      return;
    }

    this.startTypewriter();
    this.runIntroAnimation();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) {
      window.clearTimeout(this.typingTimer);
    }
  }

  private startTypewriter(): void {
    this.zone.runOutsideAngular(() => {
      const tick = () => {
        const currentTitle = this.owner.titles[this.titleIndex];

        if (this.deleting) {
          this.charIndex = Math.max(0, this.charIndex - 1);
        } else {
          this.charIndex = Math.min(currentTitle.length, this.charIndex + 1);
        }

        this.zone.run(() => {
          this.activeTitle = currentTitle.slice(0, this.charIndex);
        });

        if (!this.deleting && this.charIndex === currentTitle.length) {
          this.deleting = true;
          this.typingTimer = window.setTimeout(tick, 1400);
          return;
        }

        if (this.deleting && this.charIndex === 0) {
          this.deleting = false;
          this.titleIndex = (this.titleIndex + 1) % this.owner.titles.length;
        }

        const delay = this.deleting ? 42 : 82;
        this.typingTimer = window.setTimeout(tick, delay);
      };

      this.typingTimer = window.setTimeout(tick, 900);
    });
  }

  private runIntroAnimation(): void {
    const copyElement = this.heroCopy?.nativeElement;
    const panelElement = this.heroPanel?.nativeElement;

    if (!copyElement || !panelElement) {
      return;
    }

    this.zone.runOutsideAngular(() => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from(copyElement.children, {
          y: 28,
          opacity: 0,
          duration: 0.85,
          stagger: 0.1,
        })
        .from(
          panelElement,
          {
            y: 36,
            opacity: 0,
            scale: 0.97,
            duration: 0.8,
          },
          '-=0.45',
        );
    });
  }
}
