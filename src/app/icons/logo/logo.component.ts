import { Component, input } from '@angular/core';

@Component({
  selector: 'svg[logo]',
  templateUrl: './logo.component.html',
  host: {
    '[attr.viewBox]' : 'viewBox()'
  }
})
export class LogoComponent {
  readonly viewBox = input<string>('0 0 2992 2248');
}
