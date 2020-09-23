import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ben-primary-form',
  templateUrl: './primary-form.component.html',
  styleUrls: ['./primary-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryFormComponent {

  constructor() {
  }
}
