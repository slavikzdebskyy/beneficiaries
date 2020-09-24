import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Relationship {
  name: string;
  value: boolean;
}

@Component({
  selector: 'ben-primary-form',
  templateUrl: './primary-form.component.html',
  styleUrls: ['./primary-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrimaryFormComponent {
  public form: FormGroup;
  public minDate: Date;
  public maxDate: Date;
  public snn: string[];
  public relationships: Relationship[];

  constructor() {
    this.minDate = new Date(new Date().getFullYear() - 80, 0, 1);
    this.maxDate = new Date(new Date().getFullYear() - 20, 11, 31);
    this.snn = ['SNN'];
    this.relationships = [{ name: 'Trust', value: true }];

    this.initForm();
  }

  private initForm(): void {
    this.form = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      snn: new FormControl(this.snn[0], [Validators.required]),
      optional: new FormControl(''),
      relationship: new FormControl(this.relationships[0].value, [Validators.required]),
      percentage: new FormControl('', [Validators.required]),
    });
  }


}
