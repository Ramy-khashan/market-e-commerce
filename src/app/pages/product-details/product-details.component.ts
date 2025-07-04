import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponsiveEnum } from 'src/app/shared/enum/responsive-enum';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  gridCols = 4
  products: any[] | undefined;
  items: any[] | undefined;

  constructor(private responsive: ResponsiveService, private router: Router) { }
  currentScreenSize$: Observable<ResponsiveEnum>;
  ngOnInit(): void {
    this.currentScreenSize$ = this.responsive.currentScreenSize$;
    this.currentScreenSize$.subscribe(size =>
      this.gridCols = size == ResponsiveEnum.Large ? 4 : size == ResponsiveEnum.Medium ? 2 : 1
    );
    this.items = [
      "خبز محمص بالسمسم",
      "لحم بقري مشوي",
      "جبن شيدر",
      "خس طازج",
      "شرائح طماطم",
      "مخلل",
      "بصل",
      "صوص باربكيو",
      "كاتشب",
    ]
    this.products = [
      {
        id: "21",
        name: 'Product 1',
        price: 540,
        onSale: true,
        salePrice: 66,
        quantity: 1,
        description: 'This is product 2',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png'
      },
      {
        id: "22",
        name: 'Product 2',
        price: 5400,
        onSale: false,
        quantity: 1,

        salePrice: 663,
        description: 'This is product 2',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png'
      },


      {
        id: "23",
        name: 'Product 3',
        price: 140,
        quantity: 1,

        onSale: true,
        salePrice: 50,
        description: 'This is product 3',
        image: 'https://static.vecteezy.com/system/resources/thumbnails/024/841/285/small_2x/wireless-headphone-isolated-on-transparent-background-high-quality-bluetooth-headphone-for-advertising-and-product-catalogs-generative-ai-png.png'
      },
      {
        id: "28",
        name: 'Product 4',
        price: 340,
        quantity: 1,

        onSale: false,
        salePrice: 50,
        description: 'This is product 4',
        image: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'
      },



    ];
  }
  onTapProduct() {
    this.router.navigate(['market/pages/product-details']);
  }
  quantity: number = 1;
  increaseQuantity() {
    this.quantity++;
  }
  decreaseQunatity() {
    if (this.quantity > 1) {
      this.quantity--
    }
  }
  addionsItems: any[] = [
    'كاتشب',
    'مايونيز',
    'بطاطس',
    'هلبينو',
    'صوص رانش',

  ]
}
