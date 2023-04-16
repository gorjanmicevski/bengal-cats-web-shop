import {Component} from '@angular/core';
import {MainService} from "../main.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent {

  form = this.builder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]]
  })

  constructor(private service: MainService, private builder: FormBuilder) {
  }

  registerClient() {
    if (this.form.invalid) return
    this.service.registerClient(this.form.value)
    this.form.reset()
  }
}
