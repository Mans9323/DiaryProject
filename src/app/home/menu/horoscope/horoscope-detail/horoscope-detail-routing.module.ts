import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopeDetailPage } from './horoscope-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopeDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopeDetailPageRoutingModule {}
