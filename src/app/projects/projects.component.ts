import { Component } from '@angular/core';
import { ProjectCardComponent } from "../project-card/project-card.component";
import projects_json from "../../../public/projects.json"
import { Project } from '../Interfaces/project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCardComponent, NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = projects_json as Project[]
}
