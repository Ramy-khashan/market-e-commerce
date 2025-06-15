import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { ResponsiveEnum } from 'src/app/shared/enum/responsive-enum';
import { ResponsiveService } from 'src/app/shared/services/responsive.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  mostSales: any[] | undefined;
  dailyOffers: any[] | undefined;
  suggestions: any[] | undefined;
  partitionsItems: any[] | undefined;
  menus: any[] | undefined;

  currentScreenSize$: Observable<ResponsiveEnum>;
  ngOnInit(): void {
    this.currentScreenSize$ = this.responsive.currentScreenSize$;
    this.currentScreenSize$.subscribe(size => {
      this.gridCols = size == ResponsiveEnum.Large ? 4 : size == ResponsiveEnum.Medium ? 2 : 1;
      this.menu = size == ResponsiveEnum.Large ? 4 : 2

    }
    );

    this.mostSales = [
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
    this.suggestions = [{
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
    this.dailyOffers = [

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
    this.partitionsItems = [
      {
        image: 'assets/partitions.png',
        id: 2
      }, {
        image: 'assets/partitions.png',
        id: 2
      }, {
        image: 'assets/partitions.png',
        id: 2
      },
    ];


  }
  gridCols = 2;
  partitions = 3;
  menu = 4;
  size: ResponsiveEnum;
  constructor(private responsive: ResponsiveService, private router: Router) {

    this.menus = [
      {
        image: 'assets/menu.png',
        title: "سندوتشات",
        subTitle: "(12 صنف )",
        id: 1
      }, {
        image: 'assets/menu.png',
        title: "وجبات",
        subTitle: "(12 صنف )",
        id: 2
      }, {
        image: 'assets/menu.png',
        title: "مشروبات",
        subTitle: "(12 صنف )",
        id: 3
      }, {
        image: 'assets/menu.png',
        title: "مقبلات",
        subTitle: "(12 صنف )",
        id: 4
      }, {
        image: 'assets/menu.png',
        title: "عروض",
        subTitle: "(12 صنف )",
        id: 5
      },
    ]


  }
  onTapProduct() {
    this.router.navigate(['market/pages/product-details']);

  }
}
