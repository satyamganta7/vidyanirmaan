import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu = true;

  academic = [
    { id: 1, name: '2023-2024', value: '2023-2024' },
    { id: 1, name: '2022-2023', value: '2022-2023' },
    { id: 1, name: '2021-2022', value: '2021-2022' },
    { id: 1, name: '2020-2021', value: '2020-2021' },
  ];
  selectedAcademic = 1;

  branch = [
    { id: 1, name: 'Kukatpally', value: 'Kukatpally' },
    { id: 2, name: 'Himayat Nagar', value: 'Himayat Nagar' },
    { id: 3, name: 'Chikkadpally', value: 'Chikkadpally' },
    { id: 4, name: 'Ameerpet', value: 'Ameerpet' },
  ];
  selectedBranch = 2;

}