import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  isDesktop = this.deviceService.isDesktop()
  constructor(private deviceService: DeviceDetectorService) {
  }
}
