import { Component } from '@angular/core';
import { NavBarModel } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  serviceItems: NavBarModel[] = [

    { lable: 'قائمة وجباتنا', routerLink: '/market/pages/home' },
    { lable: 'اخر المستجدات', routerLink: '/market/pages/home' },
    { lable: 'الفعاليات', routerLink: '/market/pages/home' },
    { lable: 'معرض الصور', routerLink: '/market/pages/home' },
    { lable: 'تحميل قائمة الطعام', routerLink: '/market/pages/home' },

  ];
  aboutUsItems: NavBarModel[] = [
    { lable: 'من نحن', routerLink: '/market/pages/home' },
    { lable: 'التوظيف', routerLink: '/market/pages/home' },
    { lable: 'فروعنا', routerLink: '/market/pages/home' },
    { lable: 'تواصل معنا', routerLink: '/market/pages/home' },
    { lable: 'مقالات', routerLink: '/market/pages/home' },

  ];
  tearmsItems: NavBarModel[] = [
    { lable: 'سياسة الخصوصية', routerLink: '/market/pages/home' },
    { lable: 'الشروط والأحكام', routerLink: '/market/pages/home' },
    { lable: 'سياسة الدفع', routerLink: '/market/pages/home' },
    { lable: 'سياسة التوصيل', routerLink: '/market/pages/home' },
    { lable: 'سياسة الاستبدال والاسترجاع', routerLink: '/market/pages/home' },

  ]
    ;
}
