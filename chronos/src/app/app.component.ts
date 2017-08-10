import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  users: FirebaseListObservable<any[]>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, db: AngularFireDatabase) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.users = db.list('/users', { preserveSnapshot: true });
      this.users.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot);
          console.log(snapshot.key);
          console.log(snapshot.val());
        });       
      });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

