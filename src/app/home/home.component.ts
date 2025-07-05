import { Component } from '@angular/core';
import { EmailComponent } from '../icons/email/email.component';
import { LinkedinComponent } from '../icons/linkedin/linkedin.component';
import { GithubComponent } from '../icons/github/github.component';

@Component({
  selector: 'app-home',
  imports: [EmailComponent, LinkedinComponent, GithubComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
