import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[email]',
  templateUrl: './email.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()',
    '[attr.width]' : 'width()',
    '[attr.fill]' : 'fill()',
  }
})
export class EmailComponent {
  readonly viewBox = input<string>('0 0 1080 1080');
  readonly width = input<string>('55px');
  readonly fill = input<string>('#000000')
}
