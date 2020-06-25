import { Component, OnInit, ElementRef, HostListener, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { select, Selection, BaseType } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { easeLinear } from 'd3-ease';
import { transition } from 'd3-transition';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit, OnDestroy {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  bgElement: HTMLElement;
  w: number;
  h: number;
  g: any;
  x: number;
  n = 100;
  comet: Selection<BaseType, unknown, HTMLElement, any>;
  sub: Subscription = new Subscription();
  intervalMs = 5000;
  resize = new Subject();
  init: boolean;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platform_id: Object) {}

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.bgElement = this.elementRef.nativeElement.querySelector('.hero-first-bg');
    this.render();
    this.x = 0;
    this.animation();
    this.sub.add(this.cometTwinkle());
    this.sub.add(this.resizeEvent());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private cometTwinkle(): Subscription {
    return interval(this.intervalMs).subscribe(() => {
      this.comet
        .style('left', `${this.getRandomInt(10, 90)}%`)
        .style('top', `${this.getRandomInt(10, this.h)}px`)
        .style('animation', `cometShorter ${this.intervalMs}ms cubic-bezier(0,.53,.35,.99) 0s infinite`);
    });
  }

  private resizeEvent(): Subscription {
    return this.resize.pipe(debounceTime(400), distinctUntilChanged()).subscribe(() => this.render());
  }

  private animation = () => {
    const t = transition()
      .duration(this.init ? this.intervalMs : 0)
      .ease(easeLinear);
    this.x = this.x < this.n - 1 ? (this.x += 1) : 0;
    this.g
      .selectAll('.star')
      .transition(t)
      .attr('cx', (_: any, i: number) => {
        const move = (this.w / this.n) * i + (this.w / this.n) * this.x;
        return move > this.w ? move - this.w : move;
      })
      .on('end', (_: number, size: number) => {
        if (size === this.n - 1) {
          this.animation();
          this.init = true;
        }
      });
  };

  private render(): void {
    this.init = false;
    this.w = this.bgElement.clientWidth;
    this.h = this.bgElement.clientHeight;
    select(this.bgElement).select('svg').remove();
    const svg = select(this.bgElement).append('svg').attr('width', this.w).attr('height', this.h);
    this.g = svg.append('g');
    this.comet = select('.comet');
    this.generateStars();
  }

  private generateStars(): void {
    this.g.selectAll('.star').remove();
    [...new Array(this.n)].forEach(() => {
      this.g
        .append('circle')
        .attr('class', 'star')
        .attr('r', `0.${this.getRandomInt(60, 99)}`)
        .attr('fill', '#fff')
        .attr('cx', (_: any, i: number) => (this.w / this.n) * i)
        .attr('cy', Math.random() * this.h)
        .style('animation', `${this.getRandomInt(1000, 10000)}ms ease-in-out 0s infinite normal none twinkle`);
    });
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @HostListener('window:resize', ['$event']) onResize(e: Event) {
    if (!this.isBrowser) {
      return;
    }

    this.resize.next(e);
  }
}
