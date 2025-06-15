import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { async, map, Observable } from 'rxjs';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent implements OnInit {
  gridCols = 1;
  hiringItems: any[] | undefined;


  isSmallScreen$: Observable<boolean>;
  isMediumScreen$: Observable<boolean>;
  isLargeScreen$: Observable<boolean>;

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

    this.isSmallScreen$ = this.breakpointObserver.observe([
      '(max-width: 599px)',
    ]).pipe(map(result => result.matches));

    this.isMediumScreen$ = this.breakpointObserver.observe([
      '(min-width: 600px) and (max-width: 1199px)',
    ]).pipe(map(result => result.matches));

    this.isLargeScreen$ = this.breakpointObserver.observe([
      '(min-width: 1200px)',
    ]).pipe(map(result => result.matches));
    this.isSmallScreen$.subscribe(isSmall => {
      if (isSmall) {
        this.gridCols = 1;
      }
    });

    this.isMediumScreen$.subscribe(isMedium => {
      if (isMedium) {
        this.gridCols = 2;
      }

    });

    this.isLargeScreen$.subscribe(isLarge => {
      if (isLarge) {
        this.gridCols = 4;
      }
    });
  }
  ngOnInit(): void {

  }

}
