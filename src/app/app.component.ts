import { Component } from '@angular/core';
import { Carousel,Collapse, Dropdown, initTE,Tab, Sidenav,Input } from 'tw-elements';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG_Task';

  constructor(public auth: AuthService){

  }

  ngOnInit() {
    initTE({ Collapse, Carousel, Dropdown, Tab, Sidenav, Input });
  }
}
