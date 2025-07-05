import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[linkedin]',
  templateUrl: './linkedin.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.width]' : 'width()',
  }
})
export class LinkedinComponent {
  readonly viewBox = input<string>('0 0 72 72');
  readonly width = input<string>('50px');
}
