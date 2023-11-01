import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menu = true;
  
  cars = [
    { id: 1, name: 'Volvo', value: 'a' },
    { id: 2, name: 'Saab', value: 'b' },
    { id: 3, name: 'Opel', value: 'c' },
    { id: 4, name: 'Audi', value: 'd' },
  ];
  selectedCar = 2;
 
}