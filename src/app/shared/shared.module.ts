import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { SharedRoutingModule } from './shared-routing.module';
import { LayoutComponent } from './layout/layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ConfirmPopupComponent } from './components/confirm-popup/confirm-popup.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConfirmPopupComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgSelectModule,
    NgxDatatableModule
  ],
  exports: [
    CommonModule,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ConfirmPopupComponent
  ]
})
export class SharedModule { }
