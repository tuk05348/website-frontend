import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[linkedin]',
  templateUrl: './linkedin.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()'
  }
})
export class LinkedinComponent {
  readonly viewBox = input<string>('0 0 72 72');
}
