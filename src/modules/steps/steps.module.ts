import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepsRoutingModule } from './steps-routing.module';
import { PrimaryFormComponent } from './components';

@NgModule({
  declarations: [PrimaryFormComponent],
  imports: [
    CommonModule,
    StepsRoutingModule
  ]
})
export class StepsModule { }
