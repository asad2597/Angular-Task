import { Component, OnInit } from '@angular/core';
import { initTE,  Sidenav, Ripple } from 'tw-elements';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit{
  
  ngOnInit() {
    initTE({Sidenav , Ripple});
  }
  
}
