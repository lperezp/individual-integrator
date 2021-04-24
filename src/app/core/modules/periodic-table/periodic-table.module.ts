import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeriodicTableRoutingModule } from './periodic-table-routing.module';
import { PeriodicTableComponent } from './periodic-table.component';

@NgModule({
  declarations: [PeriodicTableComponent],
  imports: [CommonModule, PeriodicTableRoutingModule],
})
export class PeriodicTableModule {}
