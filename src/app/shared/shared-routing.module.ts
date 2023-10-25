import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// { SharedComponent } from './shared.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
