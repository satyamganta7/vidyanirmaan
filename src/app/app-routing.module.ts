import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
  },

  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule) },

  //  {
  //   path: '', component: LayoutComponent,
  //   children: [
  //     { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
