import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopetraitPage } from './horoscopetrait.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopetraitPage
  },
  {
    path: 'horoscopetrait-detail',
    loadChildren: () => import('./horoscopetrait-detail/horoscopetrait-detail.module').then( m => m.HoroscopetraitDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopetraitPageRoutingModule {}
