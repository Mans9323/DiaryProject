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
              },
              {
                path: 'user-horoscope',
                loadChildren:() => import('./menu/horoscope/user-horoscope/user-horoscope.module').then(m=> m.UserHoroscopePageModule)
              }
            ]
          },
          {
            path: 'horoscopetrait',
            children:[
              {
                path: '',
                loadChildren: () => import('./menu/horoscopetrait/horoscopetrait.module').then(m=>m.HoroscopetraitPageModule)
              },
              {
                path: ':title',
                loadChildren: () => import('./menu/horoscopetrait/horoscopetrait-detail/horoscopetrait-detail.module').then(m=>m.HoroscopetraitDetailPageModule)
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
    path: 'profile',
    children: [{
      path: '',
      loadChildren: () => import('./profile/profile.module').then(m=> m.ProfilePageModule)
    }]
  },
  {
    path: '',
    redirectTo: '/home/tabs/menu',
    pathMatch: 'full'
  },
  {
    path: 'viewprofile',
    children: [{
      path: '',
      loadChildren: () => import('./viewprofile/viewprofile.module').then( m => m.ViewprofilePageModule)
    },
    {
      path: 'edit',
      loadChildren: () => import('./editprofile/editprofile.module').then( m => m.EditprofilePageModule)
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
