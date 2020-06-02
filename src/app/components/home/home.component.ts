import { Component, OnInit, ElementRef, HostListener, PLATFORM_ID, Inject, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { interval, Subscription } from 'rxjs';
import { select, Selection, BaseType } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { easeLinear } from 'd3-ease';
import 'd3-transition';

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

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platform_id) { }

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    this.bgElement = this.elementRef.nativeElement.querySelector('.hero-first-bg');
    this.render();
    this.x = 0;
    this.animation();
    this.sub.add(this.cometTwinkle());
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private cometTwinkle(): Subscription {
    return interval(this.intervalMs)
      .subscribe(() => {
        this.comet
          .style('left', `${this.getRandomInt(10, 90)}%`)
          .style('top', `${this.getRandomInt(10, this.h / 2)}px`)
          .style('animation', `cometShorter ${this.intervalMs}ms cubic-bezier(0,.53,.35,.99) 0s infinite`);
      });
  }

  private animation = () => {
    this.x = (this.x < this.n - 1) ? this.x += 1 : 0;
    this.g.selectAll('circle')
      .transition()
      .duration(this.intervalMs)
      .ease(easeLinear)
      .attr('cx', (_: any, i: number) => {
        const move = ((this.w / this.n) * i) + (this.w / this.n) * this.x;
        return (move > this.w) ? move - this.w : move;
      })
      .on('end', (_: number, size: number) => {
        if (size === this.n - 1) {
          this.animation();
        }
      });
  }

  private render(): void {
    this.w = this.bgElement.clientWidth;
    this.h = this.bgElement.clientHeight;
    select(this.bgElement).select('svg').remove();

    const svg = select(this.bgElement).append('svg').attr('width', this.w).attr('height', this.h);
    let g = svg.append('g');

    let data = [...new Array(this.n)].map(() => this.getRandomInt(0, 10));
    const x = scaleLinear().domain([0, data.length - 1]).range([0, this.w]);
    const y = scaleLinear().domain([0, 150]).range([this.h, 0]);

    this.g = svg.append('g');
    this.comet = select('.comet');

    this.generateStars();

    g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => 185)
      .attr('cx', (d: any, i: number) => x(i))
      .attr('cy', (d: any, i: number) => y(d))
      .attr('fill', '#ffffff')
      .attr('stroke', 'none');

    g = svg.append('g');
    g.append('image')
      .attr('xlink:href', '/assets/images/travel.svg')
      .attr('width', this.w / 5)
      .attr('height', this.w / 5)
      .attr('x', this.w - (this.w / 6 + this.w / 5))
      .attr('y', this.w < 500 ? 50 : this.h / 4);
  }

  private generateStars(): void {
    this.g.selectAll('circle').remove();
    [...new Array(this.n)]
      .forEach(() => {
        this.g.append('circle')
          .attr('class', 'star')
          .attr('r', `0.${this.getRandomInt(60, 99)}`)
          .attr('fill', '#fff')
          .attr('cx', Math.random() * this.w)
          .attr('cy', Math.random() * this.h)
          .style('animation', `${this.getRandomInt(1000, 10000)}ms ease-in-out 0s infinite normal none twinkle`)
      });
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @HostListener('window:resize', ['$event']) onResize(e: Event) {
    if (!this.isBrowser) {
      return;
    }

    this.render();
  }
}
