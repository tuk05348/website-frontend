import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[email]',
  templateUrl: './email.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()'
  }
})
export class EmailComponent {
  readonly viewBox = input<string>('0 0 1080 1080');
}
