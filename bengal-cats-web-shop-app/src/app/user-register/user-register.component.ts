import {Component} from '@angular/core';
import {MainService} from "../main.service";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  firstName = ''
  lastName = ''
  email = ''

  constructor(private service: MainService) {
  }

  registerClient() {
    this.service.registerClient({firstName: this.firstName, lastName: this.lastName, email: this.email})
    this.firstName = ''
    this.lastName = ''
    this.email = ''
  }
}
