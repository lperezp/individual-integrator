import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';
import { InputSearchComponent } from './modules/components/inputs/input-search/input-search.component';

@NgModule({
  declarations: [UserLayoutComponent, UserHeaderComponent, InputSearchComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
