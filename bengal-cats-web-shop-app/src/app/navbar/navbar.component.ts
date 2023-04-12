import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output()
  navItemClickEvent = new EventEmitter<string>()

  navItemClick(item: string) {
    this.navItemClickEvent.emit(item)
  }
}
