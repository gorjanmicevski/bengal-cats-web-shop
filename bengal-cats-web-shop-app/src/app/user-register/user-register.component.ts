import {Component, OnInit} from '@angular/core';
import {MainService} from "../main.service";
import {FormBuilder, Validators} from "@angular/forms";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {RegisterStatusComponent} from "../register-status/register-status.component";
import {map} from "rxjs";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  form = this.builder.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, [Validators.required, Validators.email]],
    country: [null, Validators.required]
  })
  countries: any[];
  filteredCountries: any[];

  constructor(private service: MainService, private builder: FormBuilder, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getCountries().pipe(
      map(countries => countries.map(country => {
        return {
          name: country.name.common === 'North Macedonia' ? 'Macedonia' : country.name.common,
          code: country.cca2
        }
      }))
    ).subscribe((countries) => {
      this.countries = countries
    });
  }

  filterCountries(event: { query: any; }) {
    this.filteredCountries = this.countries.filter(
      country => country.name.toLowerCase().indexOf(event.query.toLowerCase()) == 0);
  }

  registerClient() {
    if (this.form.invalid) {
      this.dialog.open(RegisterStatusComponent, {data: {error: true, text: 'Invalid register form data'}})
    } else {
      this.service.registerClient({...this.form.value, country: (this.form.value.country as {name: string, code: string} | null)?.name}).subscribe({
        next: () => {
          this.dialog.open(RegisterStatusComponent, {data: {error: false}})
          this.form.reset()
        }, error: () => {
          this.dialog.open(RegisterStatusComponent, {data: {error: true, text: 'An unexpected error occured. Please try again later and if the error persists contact us by email'}})
        }
      })
    }
  }
}
