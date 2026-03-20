import { CommonModule, isPlatformBrowser } from '@angular/common';
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
import gsap from 'gsap';

@Component({
  selector: 'app-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.scss',
})
export class CursorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('outerCursor') outerCursor?: ElementRef<HTMLDivElement>;
  @ViewChild('innerCursor') innerCursor?: ElementRef<HTMLDivElement>;

  protected readonly enabled: boolean;

  private removeMoveListener?: () => void;
  private removeEnterListener?: () => void;
  private removeLeaveListener?: () => void;
  private removeOverListener?: () => void;
  private removeOutListener?: () => void;
  private outerXTo?: (value: number) => void;
  private outerYTo?: (value: number) => void;

  constructor(
    @Inject(PLATFORM_ID) private readonly platformId: object,
    private readonly zone: NgZone,
  ) {
    this.enabled = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.enabled || !this.outerCursor || !this.innerCursor) {
      return;
    }

    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const outer = this.outerCursor.nativeElement;
    const inner = this.innerCursor.nativeElement;

    const setInnerX = gsap.quickSetter(inner, 'x', 'px');
    const setInnerY = gsap.quickSetter(inner, 'y', 'px');

    this.outerXTo = gsap.quickTo(outer, 'x', {
      duration: 0.035,
      ease: 'none',
    });
    this.outerYTo = gsap.quickTo(outer, 'y', {
      duration: 0.035,
      ease: 'none',
    });

    this.zone.runOutsideAngular(() => {
      const onMove = (event: MouseEvent) => {
        setInnerX(event.clientX);
        setInnerY(event.clientY);
        this.outerXTo?.(event.clientX);
        this.outerYTo?.(event.clientY);
        outer.classList.add('is-visible');
        inner.classList.add('is-visible');
      };

      const onPointerEnter = () => {
        outer.classList.add('is-visible');
        inner.classList.add('is-visible');
      };
      const onPointerLeave = () => {
        outer.classList.remove('is-visible', 'is-hovering');
        inner.classList.remove('is-visible', 'is-hovering');
      };
      const onInteractiveOver = (event: Event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest('a, button, [role="button"]')) {
          outer.classList.add('is-hovering');
          inner.classList.add('is-hovering');
        }
      };
      const onInteractiveOut = (event: Event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest('a, button, [role="button"]')) {
          outer.classList.remove('is-hovering');
          inner.classList.remove('is-hovering');
        }
      };

      window.addEventListener('mousemove', onMove, { passive: true });
      window.addEventListener('mouseenter', onPointerEnter, { passive: true });
      window.addEventListener('mouseleave', onPointerLeave, { passive: true });
      document.addEventListener('mouseover', onInteractiveOver, { passive: true });
      document.addEventListener('mouseout', onInteractiveOut, { passive: true });

      this.removeMoveListener = () => window.removeEventListener('mousemove', onMove);
      this.removeEnterListener = () => window.removeEventListener('mouseenter', onPointerEnter);
      this.removeLeaveListener = () => window.removeEventListener('mouseleave', onPointerLeave);
      this.removeOverListener = () => document.removeEventListener('mouseover', onInteractiveOver);
      this.removeOutListener = () => document.removeEventListener('mouseout', onInteractiveOut);
    });
  }

  ngOnDestroy(): void {
    this.removeMoveListener?.();
    this.removeEnterListener?.();
    this.removeLeaveListener?.();
    this.removeOverListener?.();
    this.removeOutListener?.();
  }
}
