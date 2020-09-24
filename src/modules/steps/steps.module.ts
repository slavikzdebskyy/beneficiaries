import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsRoutingModule } from './steps-routing.module';
import { PrimaryFormComponent } from './components';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MATERIAL_MODULES = [
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatIconModule,
];

@NgModule({
  declarations: [PrimaryFormComponent],
  imports: [
    ...MATERIAL_MODULES,
    CommonModule,
    StepsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class StepsModule {
}
