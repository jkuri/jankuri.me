import { Component, OnInit, ElementRef, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { easeLinear } from 'd3-ease';
import 'd3-transition';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {
  private isBrowser: boolean = isPlatformBrowser(this.platform_id);
  bgElement: HTMLElement;
  w: number;
  h: number;
  g: any;
  x: number;

  constructor(private elementRef: ElementRef, @Inject(PLATFORM_ID) private platform_id) { }

  ngOnInit() {
    if (!this.isBrowser) {
      return;
    }

    this.bgElement = this.elementRef.nativeElement.querySelector('.hero-first-bg');
    this.render();
    this.x = 0;
    this.animation();
  }

  animation = () => {
    this.x = (this.x < 30) ? this.x += 1 : 0;
    this.g.selectAll('circle')
      .transition()
      .duration(650)
      .ease(easeLinear)
      .attr('cx', (d: any, i: number) => {
        const move = ((this.w / 30) * i) + (this.w / 30) * this.x;
        return (move > this.w) ? move - this.w : move;
      })
      .on('end', (val: number, size: number) => {
        if (size === 29) {
          this.animation();
        }
      });
  }

  render() {
    this.w = this.bgElement.clientWidth;
    this.h = this.bgElement.clientHeight;
    select(this.bgElement).select('svg').remove();

    const svg = select(this.bgElement).append('svg').attr('width', this.w).attr('height', this.h);
    let g = svg.append('g');

    let data = [20, 24, 20, 20, 25, 27, 26, 20, 21, 22, 24, 20, 28, 20, 28, 26, 25, 28, 22, 24, 29, 21, 30, 21, 27, 22, 23, 28, 30, 24];
    const x = scaleLinear().domain([0, data.length - 1]).range([0, this.w]);
    const y = scaleLinear().domain([0, 150]).range([this.h, 0]);

    this.g = svg.append('g');

    this.g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => this.getRandomInt(this.w < 500 ? 5 : 10, this.w < 500 ? 10 : 30))
      .attr('cx', (d: any, i: number) => (this.w / data.length) * i)
      .attr('cy', (d: any, i: number) => this.getRandomInt(0, this.w))
      .attr('fill', '#34BEEB');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => 105)
      .attr('cx', (d: any, i: number) => x(i))
      .attr('cy', (d: any, i: number) => y(d))
      .attr('fill', '#63CCF0')
      .attr('stroke', 'none');

    data = [12, 14, 12, 17, 12, 14, 19, 13, 16, 17, 17, 14, 10, 19, 18, 16, 10, 11, 10, 12, 17, 14, 14, 13, 14, 13, 12, 10, 19];
    g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => 145)
      .attr('cx', (d: any, i: number) => x(i))
      .attr('cy', (d: any, i: number) => y(d))
      .attr('fill', '#A4E0F5')
      .attr('stroke', 'none');

    data = [1, 2, 0, 2, 7, 1, 0, 6, 6, 6, 1, 4, 8, 10, 7, 8, 9, 4, 7, 2, 4, 2, 4, 9, 2, 7, 2, 10, 2, 10];
    g = svg.append('g');

    g.selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', (d: any, i: number) => 185)
      .attr('cx', (d: any, i: number) => x(i))
      .attr('cy', (d: any, i: number) => y(d))
      .attr('fill', '#FFFFFF')
      .attr('stroke', 'none');

    g = svg.append('g');
    g.append('image')
      .attr('xlink:href', '/assets/images/travel.svg')
      .attr('width', this.w / 5)
      .attr('height', this.w / 5)
      .attr('x', this.w - (this.w / 6 + this.w / 5))
      .attr('y', this.w < 500 ? 50 : this.h / 4);
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @HostListener('window:resize', ['$event']) onResize(e: Event) {
    if (!this.isBrowser) {
      return;
    }

    this.render();
  }
}
