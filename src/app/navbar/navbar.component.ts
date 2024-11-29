import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  //ServiceSerice a SearchService lenne, csak elirtam uwu
  constructor (private search:ServiceService) {

  }
}
