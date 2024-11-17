import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent {
  gridCols = 4;
  hiringItems: any[] | undefined;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.hiringItems = [
      {
        title: "طاهي",
        branch: "فرع الرياض ",
        time: "دوام كامل (8 ساعات عمل لمدة 6 ايام)",
        experience: "خبرة عامين على الاقل"
      }, {
        title: "طاهي",
        branch: "فرع الرياض ",
        time: "دوام كامل (8 ساعات عمل لمدة 6 ايام)",
        experience: "خبرة عامين على الاقل"
      }, {
        title: "طاهي",
        branch: "فرع الرياض ",
        time: "دوام كامل (8 ساعات عمل لمدة 6 ايام)",
        experience: "خبرة عامين على الاقل"
      }, {
        title: "طاهي",
        branch: "فرع الرياض ",
        time: "دوام كامل (8 ساعات عمل لمدة 6 ايام)",
        experience: "خبرة عامين على الاقل"
      },
    ]


    this.breakpointObserver.observe([Breakpoints.Web, Breakpoints.Large, Breakpoints.TabletLandscape])
      .subscribe(result => {
        if (result.matches) {
          this.gridCols = 4;

        } else {
          this.gridCols = 2;


        }
      });

  }
}
