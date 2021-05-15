import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { AnalysisRoutingModule } from './analysis-routing.module';

import { RangeAgeComponent } from './components/range-age/range-age.component';
import { RegisterByHourComponent } from './components/register-by-hour/register-by-hour.component';
import { AnalysisPageComponent } from './pages/analysis-page/analysis-page.component';

@NgModule({
  declarations: [
    AnalysisPageComponent,
    RangeAgeComponent,
    RegisterByHourComponent,
  ],
  imports: [CommonModule, AnalysisRoutingModule, SharedModule],
})
export class AnalysisModule {}
