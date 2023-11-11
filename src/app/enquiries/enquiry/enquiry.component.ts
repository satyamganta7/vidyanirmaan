import { Component, ElementRef, ViewChild } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmPopupComponent } from 'src/app/shared/components/confirm-popup/confirm-popup.component';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent {
  pageTitle = 'Enquires';
  modalRef?: BsModalRef;


  loadingIndicator = true;
  reorderable = true;
  rows = [];
  temp = [];

  columns = [];
  @ViewChild(DatatableComponent) table: DatatableComponent | any;

  ColumnMode = ColumnMode;

  constructor(private modalService: BsModalService, private elementRef: ElementRef) {
    this.fetch((data: never[]) => {
      // cache our list
      this.temp = [...data];

      // push our inital complete list
      this.rows = data;
    });
  }

  fetch(cb: any) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/enquiry.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = this.temp.filter(function (d: any) {
      return d.studentName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  // Delete Popup
  delete() {
    this.modalRef = this.modalService.show(ConfirmPopupComponent, {
      class: 'modal-sm'
    });
  }

}
