import { Component } from '@angular/core';

@Component({
  selector: 'app-cat-carousel',
  templateUrl: './cat-carousel.component.html',
  styleUrls: ['./cat-carousel.component.scss']
})
export class CatCarouselComponent {

  products = [
    {
      name: 'eaadds',
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      inventoryStatus: 'INSTOCK',
      price: '1000'
    },
    {
      name: 'eaadds',
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      inventoryStatus: 'LOWSTOCK',
      price: '1000'
    },
    {
      name: 'eaadds',
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      inventoryStatus: 'INSTOCK',
      price: '1000'
    },
    {
      name: 'eaadds',
      image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
      inventoryStatus: 'OUTOFSTOCK',
      price: '1000'
    }

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

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
    }
    return ""
  }
}
