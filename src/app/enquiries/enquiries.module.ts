import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';

import { EnquiriesRoutingModule } from './enquiries-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';


@NgModule({
  declarations: [
    EnquiryComponent,
    AddEnquiryComponent
  ],
  imports: [
    CommonModule,
    EnquiriesRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule
  ]
})
export class EnquiriesModule { }
