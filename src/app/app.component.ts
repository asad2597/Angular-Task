import { Component, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Carousel,Collapse, Dropdown, initTE,Tab, Sidenav,Input,Ripple} from 'tw-elements';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG_Task';
  firestore: Firestore = inject(Firestore);
  constructor(public auth: AuthService){

  }

  ngOnInit() {
    initTE({ Collapse, Carousel, Dropdown, Tab, Sidenav, Input, Ripple });
  }
}
