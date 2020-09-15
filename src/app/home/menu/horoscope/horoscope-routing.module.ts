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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopePageRoutingModule {}
