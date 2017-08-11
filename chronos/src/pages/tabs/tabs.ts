import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NowPage } from '../now/now';
import { SchedulePage } from '../schedule/schedule';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
@IonicPage()
export class TabsPage {

  homeRoot = HomePage;
  nowRoot = NowPage;
  scheduleRoot = SchedulePage;
  profileRoot = ProfilePage;
  tabs:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public appCtrl: App) {    
    this.tabs = [
      { title: "Home", root: this.homeRoot, icon: "home" },
      { title: "Now", root: this.nowRoot, icon: "clock" },
      { title: "Profile", root: this.profileRoot, icon: "person" }
    ];
    console.log(this.tabs);
  }  
}
