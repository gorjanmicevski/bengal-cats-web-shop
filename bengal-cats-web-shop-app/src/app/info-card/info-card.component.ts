import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {

  @Output() callToActionClicked = new EventEmitter<void>()
  constructor() { }

  ngOnInit(): void {
  }

  adopt() {
    this.callToActionClicked.emit()
  }
}
