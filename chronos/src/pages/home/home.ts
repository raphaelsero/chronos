import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

declare var cordova: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: FirebaseListObservable<any[]>;
  friends: FirebaseListObservable<any[]>;
  currentUser: {};
  usersData:{};

  lastImage: string = null;
  loading: Loading;
  db: AngularFireDatabase;

  constructor(public navCtrl: NavController, _db: AngularFireDatabase) {
      this.db = _db;
      //Get list of all users
      this.users = _db.list('/users');

      //mock current user
      this.currentUser = _db.object('/uid');

      //Get list of current users friends
      this.friends = _db.list('/uid/friends');
      console.log(this.friends);
      this.friends.forEach(element => {
            console.log(element);
        });
  }


}
