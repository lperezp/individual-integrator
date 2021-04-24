import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AntDesignModule } from './ant-design/ant-design.module';

const MODULES = [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
  AntDesignModule,
];

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule {}
