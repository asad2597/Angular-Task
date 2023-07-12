import { Component } from '@angular/core';
import { Carousel,Collapse, Dropdown, initTE,Tab } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NG_Task';

  ngOnInit() {
    initTE({ Collapse, Carousel, Dropdown, Tab });
  }
}
