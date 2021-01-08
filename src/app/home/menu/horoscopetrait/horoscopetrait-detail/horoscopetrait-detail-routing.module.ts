import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HoroscopetraitDetailPage } from './horoscopetrait-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HoroscopetraitDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HoroscopetraitDetailPageRoutingModule {}
