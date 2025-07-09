import { Component, Input } from '@angular/core';
import { GithubComponent } from '../icons/github/github.component';
import { Project } from '../Interfaces/project';

@Component({
  selector: 'app-project-card',
  imports: [GithubComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {

  @Input() project: Project = {
    title: '',
    image_url: '',
    alt_text: '',
    github_url: '',
    year: 0,
    short_desc: '',
    long_desc: ''
  };

}
