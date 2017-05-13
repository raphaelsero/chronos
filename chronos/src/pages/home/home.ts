import { Component } from '@angular/core';
import { NavController, ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { IUser } from '../../interfaces/iUser.ts'


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

setUserStatus(newStatus){
  
  this.db.object('/uid').update({status: newStatus});

  var updatedUser = this.db.object('/uid');

  console.log(updatedUser['status']);
  this.db.list('/uid/friends').forEach(friends => {
    // console.log(friends);
    friends.forEach(friend => {
      // console.log(friend["$key"]);
      var friendUid = friend["$key"];

      this.db.object('/' + friendUid + '/friends/uid').update({status: updatedUser['status']});
    });
    
  });
}

}

