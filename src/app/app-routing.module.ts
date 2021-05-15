import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './core/layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';

import { UserLayoutComponent } from './core/layout/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserLayoutComponent,
    loadChildren: () =>
      import('./modules/periodic-table/periodic-table.module').then(
        (m) => m.PeriodicTableModule
      ),
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'analysis',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('src/app/modules/analysis/analysis.module').then(
        (m) => m.AnalysisModule
      ),
  },
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  // {
  //   path: '**',
  //   redirectTo: 'user',
  //   pathMatch: 'full',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
