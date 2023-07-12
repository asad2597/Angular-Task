import { Component } from '@angular/core';
import { OpenCloseModelService } from '../Services/open-close-model.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {

  constructor(public model: OpenCloseModelService){}
}
