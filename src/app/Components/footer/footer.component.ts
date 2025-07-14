import { Component } from '@angular/core';
import { EmailComponent } from '../../icons/email/email.component';
import { LinkedinComponent } from '../../icons/linkedin/linkedin.component';
import { GithubComponent } from '../../icons/github/github.component';

@Component({
  selector: 'app-footer',
  imports: [EmailComponent, LinkedinComponent, GithubComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
