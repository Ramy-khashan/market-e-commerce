import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Branch } from 'src/app/shared/interface/branch';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.scss']
})
export class BranchesComponent {
  branches: Branch[] = [];

  isSmallScreen$: Observable<boolean>;
  isMediumScreen$: Observable<boolean>;
  isLargeScreen$: Observable<boolean>;
  gridCols = 1;

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {

    this.branches = [

      {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      }, {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      }, {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      }, {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      }, {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      }, {
        branchName: 'فرع الرياض - العليا',
        address: 'شارع الملك فهد، بجوار مول العليا',
        workingHours: 'من 10:00 صباحًا إلى 11:00 مساءً',
        availableServices: 'تناول الطعام في المطعم، الطلبات الخارجية، التوصيل',
        lat: 37.7749,
        long: -122.4194

      },
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
