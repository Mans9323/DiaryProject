import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserHoroscopePage } from './user-horoscope.page';

const routes: Routes = [
  {
    path: '',
    component: UserHoroscopePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserHoroscopePageRoutingModule {}
