import {Component} from '@angular/core';
import {MainService} from "../main.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RegisterStatusComponent} from "../register-status/register-status.component";

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

  constructor(private service: MainService, private builder: FormBuilder, private dialog: MatDialog) {
  }

  registerClient() {
    if (this.form.invalid) {
      this.dialog.open(RegisterStatusComponent, {data: {error: true, text: 'Invalid register form data'}})
    } else {
      this.service.registerClient(this.form.value).subscribe({next: value => {
          this.dialog.open(RegisterStatusComponent, {data: {error: false}})
          this.form.reset()
        }, error: err => {
          this.dialog.open(RegisterStatusComponent, {data: {error: true, text: 'B-e fail'}})
        }})
    }
  }
}
