import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserLayoutComponent } from './layout/user-layout/user-layout.component';
import { UserHeaderComponent } from './components/user/user-header/user-header.component';

@NgModule({
  declarations: [UserLayoutComponent, UserHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class CoreModule {}
