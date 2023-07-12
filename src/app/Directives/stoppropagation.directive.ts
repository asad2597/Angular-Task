import { Directive , HostListener} from '@angular/core';

@Directive({
  selector: '[click-stop-propagation]'
})
export class StoppropagationDirective {

  constructor() { }
  @HostListener("click", ["$event"])
    public onclick(event: any)
    {
        event.stopPropagation();
    }

}
