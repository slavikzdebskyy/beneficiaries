import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ben-root',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'beneficiaries';
}
