// src/app/services/responsive.service.ts
import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponsiveEnum } from '../enum/responsive-enum';

@Injectable({
  providedIn: 'root'   
})
export class ResponsiveService {
 
  currentScreenSize$: Observable<ResponsiveEnum>;

  constructor(private breakpointObserver: BreakpointObserver) { 
    this.currentScreenSize$ = this.breakpointObserver.observe([
      '(max-width: 599px)',     
      '(min-width: 600px) and (max-width: 1199px)',  
      '(min-width: 1200px)'     
    ]).pipe(
      map(result => {
        if (result.breakpoints['(max-width: 599px)']) {
          return ResponsiveEnum.Small;
        } else if (result.breakpoints['(min-width: 600px) and (max-width: 1199px)']) {
          return ResponsiveEnum.Medium;
        } else if (result.breakpoints['(min-width: 1200px)']) {
          return ResponsiveEnum.Large;
        }
        return ResponsiveEnum.Small;  
      })
    );
  }
}
