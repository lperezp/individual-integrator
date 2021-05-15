import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { PeriodicTableRoutingModule } from './periodic-table-routing.module';

import { PeriodicTableComponent } from './pages/periodic-table.component';
import { InputSearchComponent } from './components/inputs/input-search/input-search.component';
import { ModalElementInformationComponent } from './components/modals/modal-element-information/modal-element-information.component';

@NgModule({
  declarations: [PeriodicTableComponent, InputSearchComponent, ModalElementInformationComponent],
  imports: [CommonModule, PeriodicTableRoutingModule, SharedModule],
})
export class PeriodicTableModule {}
