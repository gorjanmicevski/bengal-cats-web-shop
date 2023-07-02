import {Component, EventEmitter, Output} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output()
  navItemClickEvent = new EventEmitter<string>()

  isDesktop = this.deviceService.isDesktop()
  constructor(private deviceService: DeviceDetectorService) {
  }

  navItemClick(item: string) {
    this.navItemClickEvent.emit(item)
  }
}
