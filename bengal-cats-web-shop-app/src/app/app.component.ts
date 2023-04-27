import {Component, ElementRef, ViewChild} from '@angular/core';
import {MainService} from "./main.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("catCarousel") catCarousel: ElementRef
  @ViewChild("aboutUs") aboutUs: ElementRef
  @ViewChild("footer") footer: ElementRef
  title = 'bengal-cats-web-shop-app';
  constructor(private service: MainService) {
  }

  handleNavItemClickEvent(navItem: string) {
    switch (navItem) {
      case "Gallery" : this.catCarousel.nativeElement.scrollIntoView({behavior: 'smooth'}); break;
      case "AboutUs" : this.aboutUs.nativeElement.scrollIntoView({behavior: 'smooth'}); break;
      case "Register" : this.footer.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
