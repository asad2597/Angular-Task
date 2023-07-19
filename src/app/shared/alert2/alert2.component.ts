import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert2',
  templateUrl: './alert2.component.html',
  styleUrls: ['./alert2.component.scss']
})
export class Alert2Component {
  @Input() color = 'blue';

  bgColor(){
    return `bg-${this.color}-300`
  }
  textColor(){
    return `text-${this.color}-700`
  }

}
