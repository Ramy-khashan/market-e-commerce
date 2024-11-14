import { Routes } from '@angular/router';


export const Full_ROUTES: Routes = [
  {
    path: 'market/pages',
    loadChildren: () =>
      import('../../pages/pages.module').then((m) => m.PagesModule),
  },
]; 