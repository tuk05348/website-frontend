import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[github]',
  templateUrl: './github.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.width]' : 'width()',
  }
})
export class GithubComponent {
  readonly viewBox = input<string>('0 0 1080.4 1106.5');
  readonly width = input<string>('50px');
}
