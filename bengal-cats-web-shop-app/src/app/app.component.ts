import {Component, ElementRef, ViewChild} from '@angular/core';
import {MainService} from "./main.service";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild("catCollage") catCarousel: ElementRef
  @ViewChild("aboutUs") aboutUs: ElementRef
  @ViewChild("footer") footer: ElementRef
  title = 'bengal-cats-web-shop-app';

  isMobile = this.deviceService.isMobile();
  isTablet = this.deviceService.isTablet();
  isDesktop = this.deviceService.isDesktop();

  constructor(private service: MainService, private deviceService: DeviceDetectorService) {
    console.log('hello `Home` component');
  }

  handleNavItemClickEvent(navItem: string) {
    switch (navItem) {
      case "Gallery" : this.catCarousel.nativeElement.scrollIntoView({behavior: 'smooth'}); break;
      case "AboutUs" : this.aboutUs.nativeElement.scrollIntoView({behavior: 'smooth'}); break;
      case "Register" : this.footer.nativeElement.scrollIntoView({behavior: 'smooth'});
    }
  }
}
