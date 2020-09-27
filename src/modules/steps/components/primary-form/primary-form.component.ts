import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export interface Relationship {
  name: string;
  value: boolean;
}

@Component({
  selector: 'ben-primary-form',
  templateUrl: './primary-form.component.html',
  styleUrls: ['./primary-form.component.scss'],
})
export class PrimaryFormComponent {
  public readonly FORM_ARRAY_KEY: string = 'beneficiaries';
  public form: FormGroup;
  public minDate: Date;
  public maxDate: Date;
  public snn: string[];
  public relationships: Relationship[];
  public totalPercentage: number;

  public get isFormValidAndFilled(): boolean {
    return this. form.valid && this.totalPercentage === 100;
  }

  private get formArray(): FormArray {
    return this.form.get(this.FORM_ARRAY_KEY) as FormArray;
  }

  private get lastFormGroup(): FormGroup {
    return this.formArray.controls[this.formArray.length - 1] as FormGroup;
  }

  constructor() {
    this.totalPercentage = 0;
    this.minDate = new Date(new Date().getFullYear() - 80, 0, 1);
    this.maxDate = new Date(new Date().getFullYear() - 20, 11, 31);
    this.snn = ['SNN'];
    this.relationships = [{ name: 'Trust', value: true }];

    this.initForm();
    this.addNewFormGroup();
  }

  public isShowCancelBtn(index: number): boolean {
    return this.formArray.controls[index].touched || this.formArray.controls.length !== index;
  }

  public isShowDoneBtb(index: number): boolean {
    return this.formArray.controls[index].valid && index === this.formArray.length - 1;
  }

  public removeOrClearFormGroup(index: number): void {
    if (this.formArray.length === 1) {
      this.formArray.controls[index] = this.createFormGroup();
      return;
    }

    this.formArray.controls.splice(index, 1);
    this.form.updateValueAndValidity();
    this.calculateTotalPercentage();

    if (this.formArray.length - 1 !== index) {
      this.setValidatorsForLast();
    }
  }

  public done(): void {
    this.calculateTotalPercentage();

    if (this.isFormValidAndFilled) {
      return;
    }

    this.formArray.push(this.createFormGroup());
    this.setValidatorsForLast();
  }

  private setValidatorsForLast(): void {
    this.lastFormGroup.controls.percentage.setValidators(this.getPercentageValidators(100 - this.totalPercentage));
  }

  private initForm(): void {
    this.form = new FormGroup({
      [this.FORM_ARRAY_KEY]: new FormArray([])
    });
  }

  private addNewFormGroup(): void {
    const formGroup = this.createFormGroup();
    formGroup.markAsUntouched();
    this.formArray.push(formGroup);
  }

  private createFormGroup(): FormGroup {
    return new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      snn: new FormControl(this.snn[0], [Validators.required]),
      optional: new FormControl('', []),
      relationship: new FormControl(this.relationships[0].value, [Validators.required]),
      percentage: new FormControl('', this.getPercentageValidators())
    });
  }

  private getPercentageValidators(maxValue = 100): ValidatorFn[] {
    return [
      Validators.required,
      Validators.min(0),
      Validators.max(maxValue)
    ];
  }

  private calculateTotalPercentage(): void {
    this.totalPercentage = this.formArray.getRawValue().reduce((acc: number, { percentage }: Record<string, any>) => acc + percentage, 0);
  }
}
