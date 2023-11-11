import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';

const routes: Routes = [
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'add-enquiry', component: AddEnquiryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnquiriesRoutingModule { }
