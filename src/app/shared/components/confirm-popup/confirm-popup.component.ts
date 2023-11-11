import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-popup',
  templateUrl: './confirm-popup.component.html',
  styleUrls: ['./confirm-popup.component.scss']
})
export class ConfirmPopupComponent implements OnInit {

  public onClose: Subject<boolean> | any;

  modalRef?: BsModalRef;
  message?: string;

  constructor(private bsModalRef: BsModalRef) { }

  confirm(): void {
    this.bsModalRef.content.onClose.next(true);
    this.message = 'Confirmed!';
    this.bsModalRef?.hide();
  }

  decline(): void {
    this.bsModalRef.content.onClose.next(false);
    this.message = 'Declined!';
    this.bsModalRef?.hide();
  }

  ngOnInit(): void {
    this.onClose = new Subject();
  }

}
