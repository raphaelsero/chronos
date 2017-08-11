import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { DatePipe } from '@angular/common';
import { SearchPage } from '../search/search';
import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  friends: FirebaseListObservable<any>;
  userIDs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
      this.friends = db.list('/uid/friends', { preserveSnapshot: true });
      this.friends.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.val().username);
        });       
      });


  }

  goToSearch(){
    this.navCtrl.push(SearchPage);
  }

  goToProfile(){
    this.navCtrl.push(ProfilePage);
  }
  goToEvent(){
    this.navCtrl.push(EventPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
