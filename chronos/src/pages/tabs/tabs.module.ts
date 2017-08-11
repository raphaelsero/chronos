import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@NgModule({
  declarations: [
    TabsPage,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ]
})
export class TabsPageModule {}
