import {Component} from '@angular/core';
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-cat-carousel',
  templateUrl: './cat-collage.component.html',
  styleUrls: ['./cat-collage.component.scss']
})
export class CatCollageComponent {
  isDesktop = this.deviceService.isDesktop()
  constructor(private deviceService: DeviceDetectorService) {
  }

  cats = [
    {
      name: "asdsad",
      image: "assets/cats/DSC_5078%20(1).jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_5011%20(1).jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_5004%20(1).jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_0997.jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_5132%20(1).jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_5127.jpg",
      price: 123,
      description: "asd"
    },{
      name: "asdsad",
      image: "assets/cats/DSC_5090%20(1).jpg",
      price: 123,
      description: "asd"
    },
  ]
  responsiveOptions = [
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '991px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}

