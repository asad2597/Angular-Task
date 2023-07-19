import { Component } from '@angular/core';
import { ModalService } from '../../services/modal.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor (
    public modal: ModalService,
    public auth: AuthService
    ){}

}
