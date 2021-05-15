import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ChartsModule } from 'ng2-charts';

import { AntDesignModule } from './ant-design/ant-design.module';
import { CardAverageComponent } from './components/card-average/card-average.component';

const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  AntDesignModule,
  ChartsModule,
];

@NgModule({
  declarations: [CardAverageComponent],
  imports: [...MODULES],
  exports: [...MODULES, CardAverageComponent],
})
export class SharedModule {}
