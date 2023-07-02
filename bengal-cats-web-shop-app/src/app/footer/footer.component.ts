import { Component } from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isDesktop = this.deviceService.isDesktop()
  constructor(private deviceService: DeviceDetectorService) {
  }
}
