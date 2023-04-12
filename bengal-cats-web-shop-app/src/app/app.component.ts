import {Component, ElementRef, ViewChild} from '@angular/core';
import {MainService} from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ts-ignore
  @ViewChild("catCarousel") catCarousel: ElementRef
  title = 'bengal-cats-web-shop-app';
  constructor(private service: MainService) {
    this.service.findAllCats().subscribe(data => console.log('cats = ',data))
  }

  handleNavItemClickEvent(navItem: string) {
    console.log(navItem, this.catCarousel)
    switch (navItem) {
      case "Kittens" : this.catCarousel.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
