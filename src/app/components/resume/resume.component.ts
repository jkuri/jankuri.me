import { Component, OnInit } from '@angular/core';
import { Resume, resume } from './resume.model';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.sass']
})
export class ResumeComponent implements OnInit {
  data: Resume = resume;

  constructor() {}

  ngOnInit(): void {}
}