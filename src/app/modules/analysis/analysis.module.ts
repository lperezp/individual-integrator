import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalysisRoutingModule } from './analysis-routing.module';
import { AnalysisPageComponent } from './pages/analysis-page/analysis-page.component';


@NgModule({
  declarations: [
    AnalysisPageComponent
  ],
  imports: [
    CommonModule,
    AnalysisRoutingModule
  ]
})
export class AnalysisModule { }
