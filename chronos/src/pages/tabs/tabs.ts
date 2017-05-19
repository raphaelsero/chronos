import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { NowPage } from '../now/now';
import { SchedulePage } from '../schedule/schedule';

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


  constructor(public navCtrl: NavController) {}

}
