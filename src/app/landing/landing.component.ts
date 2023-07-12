import { Component } from '@angular/core';
import { OpenCloseModelService } from '../Services/open-close-model.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

constructor (public model: OpenCloseModelService){}

}
