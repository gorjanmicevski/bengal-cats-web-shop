import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MainService} from "../main.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Output() callToActionClicked = new EventEmitter<void>()

  isDesktop = this.deviceService.isDesktop()
  constructor(private mainService: MainService,
              private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
  }

  adopt() {
    // this.mainService.findAllCats()
    this.callToActionClicked.emit()
  }
}
