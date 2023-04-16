import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-register-status',
  templateUrl: './register-status.component.html',
  styleUrls: ['./register-status.component.scss']
})
export class RegisterStatusComponent{
  constructor(@Inject(MAT_DIALOG_DATA) public data: {error: boolean, text: string}) {
  }
}
