import { Component, OnInit } from '@angular/core';
import { Resume, resume } from './resume.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  data: Resume = resume;

  constructor() {}

  ngOnInit(): void {}
}
