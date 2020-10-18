import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children:[
      {
        path: 'menu',
        children:[
          {
            path: '',
            loadChildren: () => import('./menu/menu.module').then(m=> m.MenuPageModule)
          }
        ]
      },
          {
            path: 'horoscope',
            children: [
              {
                path: '',
                loadChildren: () => import('./menu/horoscope/horoscope.module').then(m=> m.HoroscopePageModule)
              },
              {
                path: ':title',
                loadChildren: () => import('./menu/horoscope/horoscope-detail/horoscope-detail.module').then(m=>m.HoroscopeDetailPageModule)
              }
            ]
          },
      {
        path: 'diary',
        children: [
          {
            path: '',
            loadChildren: () => import('./diary/diary.module').then(m=> m.DiaryPageModule)
          },
          {
            path: 'new',
            loadChildren: () => import('./diary/new-entry/new-entry.module').then(m=> m.NewEntryPageModule)
          },
          {
            path: 'edit/:entryId',
            loadChildren: () => import('./diary/edit-entry/edit-entry.module').then(m=> m.EditEntryPageModule)
          },
          {
            path: ':entryId',
            loadChildren: () => import('./diary/view-entry/view-entry.module').then(m=> m.ViewEntryPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/menu',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/menu',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
