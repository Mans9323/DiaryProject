import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopePage } from './horoscope.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopePage
  },
  {
    path: 'horoscope-detail',
    loadChildren: () => import('./horoscope-detail/horoscope-detail.module').then( m => m.HoroscopeDetailPageModule)
  },
  {
    path: 'user-horoscope',
    loadChildren: () => import('./user-horoscope/user-horoscope.module').then( m => m.UserHoroscopePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopePageRoutingModule {}
