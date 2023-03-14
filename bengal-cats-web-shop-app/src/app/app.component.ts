import { Component } from '@angular/core';
import {MainService} from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bengal-cats-web-shop-app';
  constructor(private service: MainService) {
    this.service.findAllCats().subscribe(data => console.log('cats = ',data))
  }
}
