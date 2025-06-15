import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.scss']
})
export class GallaryComponent {
  gallaryImages: any[] = [];
  isSmallScreen$: Observable<boolean>;
  isMediumScreen$: Observable<boolean>;
  isLargeScreen$: Observable<boolean>;
  gridCols = 1;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.gallaryImages = [
      "partitions.png",
      "food.png",
      "partitions.png",
      "food.png",
      "partitions.png",
      "food.png",
      "partitions.png",
      "partitions.png",
      "food.png",
    ];

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
        this.gridCols = 3;
      }
    });
  }

}
