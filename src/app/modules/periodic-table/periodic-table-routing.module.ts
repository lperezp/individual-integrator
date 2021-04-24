import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { PeriodicTableComponent } from './pages/periodic-table.component';

const routes: Routes = [{ path: '', component: PeriodicTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule],
})
export class PeriodicTableRoutingModule {}
