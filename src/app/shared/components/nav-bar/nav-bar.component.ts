import { Component, OnInit } from '@angular/core';
export interface NavBarModel {
  routerLink: string;
  lable: string;
}
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items: NavBarModel[] | undefined;

  ngOnInit() {
    this.items = [
      { lable: 'الصفحة الرئيسية', routerLink: '/market/pages/home' },
      { lable: 'ملاحظات', routerLink: '/market/pages/notes' },
      { lable: 'التوظيف', routerLink: '/market/pages/hiring' },
      { lable: 'وجباتنا', routerLink: '/market/pages/our-meals' },
    ];
  }
  selectedTab: number = 0;
  onTap(index: number): void {
    this.selectedTab = index;
  }
}