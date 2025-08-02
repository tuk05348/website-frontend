import { Component, Input } from '@angular/core';
import { GithubComponent } from '../icons/github/github.component';
import { Project } from '../Interfaces/project';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-project-card',
  imports: [GithubComponent, NgIf, NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: Project = {
    title: '',
    image_url: '',
    image_title: '',
    alt_text: '',
    github_url: '',
    year: 0,
    short_desc: '',
    long_desc: ''
  };

}
