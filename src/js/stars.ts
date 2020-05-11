import { select } from 'd3-selection';

let width = document.body.clientWidth;
let height = document.body.clientHeight;
let cometInterval = null;
const body = select('body');
const comet = select('.comet');

const svg = body.append('svg').attr('width', width).attr('height', height).attr('class', 'stars');
const g = svg.append('g');

init();

window.onresize = () => init();

function init() {
  width = document.body.clientWidth;
  height = document.body.clientHeight;
  generateStars();

  clearInterval(cometInterval);
  cometInterval = setInterval(() => {
    comet
      .style('left', `${randomInt(10, 90)}%`)
      .style('top', `${randomInt(10, height / 2)}px`)
      .style('animation', 'cometShorter 5s cubic-bezier(0,.53,.35,.99) 0s infinite');
  }, 5000);
}

function generateStars(): void {
  g.selectAll('circle').remove();

  Array.from(Array(100).keys())
    .forEach(() => {
      g.append('circle')
        .attr('class', 'star')
        .attr('r', `0.${randomInt(60, 99)}`)
        .attr('fill', '#fff')
        .attr('cx', Math.random() * width)
        .attr('cy', Math.random() * height)
        .style('animation', `${randomInt(1000, 10000)}ms ease-in-out 0s infinite normal none twinkle`)
    });
}

function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
