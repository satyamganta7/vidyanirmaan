import { Component, OnInit, ViewChildren, QueryList, ViewChild } from '@angular/core';
import MetisMenu from 'metismenujs';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('menubar')

  menuElement: { nativeElement: string | Element; } | any;

  @ViewChildren('menuListItem')

  menuListItems: QueryList<any> | any;

  mm: MetisMenu | any;

  ngAfterViewInit() {
    this.mm = new MetisMenu(this.menuElement.nativeElement);
  }

}
