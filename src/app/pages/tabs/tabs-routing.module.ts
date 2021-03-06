import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'news', loadChildren: '../news/news.module#NewsPageModule' },
      // { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'news/details', loadChildren: '../news-item/news-item.module#NewsItemPageModule' },
      { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
