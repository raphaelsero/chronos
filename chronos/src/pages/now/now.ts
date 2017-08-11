import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the NowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-now',
  templateUrl: 'now.html',
})
export class NowPage {
    fireUser: FirebaseObjectObservable<any>;
    fireUserSafe: FirebaseObjectObservable<any>;    
    fireUserFriends: FirebaseListObservable<any[]>;
    user: Dynamic = {};
    userFriends: Dynamic = [];
    db: AngularFireDatabase;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase) {
    this.db = db;
    this.fireUser = db.object('/uid2', { preserveSnapshot: true });
    this.fireUser.subscribe(snapshot => {
      this.user.status = snapshot.val().status;
      this.user.until = snapshot.val().until;
      this.user.free = snapshot.val().free;
      console.log("user");
      console.log(this.user);      
    });
    
    this.fireUserFriends = db.list('/uid2/friends', { preserveSnapshot: true });
    this.fireUserFriends.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log("user friends");
        console.log(snapshot.val());
        this.userFriends.push(snapshot.key);
      });       
    });
    console.log("friends []");
    console.log(this.userFriends);
    this.fireUserSafe = this.fireUser;
  }

  save(){
    this.fireUser.update({status: this.user.status, until: this.user.until});
    this.updateFriends();
  }

  updateFriends(){
    this.userFriends.forEach(friendID => {
      console.log(friendID);
      console.log(this.db);
      var fireUserInFriendsFriendslist = this.db.object(friendID + "/friends/uid2", { preserveSnapshot: true });   
      console.log();  
      fireUserInFriendsFriendslist.update({status: this.user.status, until: this.user.until}); 
    });
  }

  cancel(){
    this.fireUser = this.fireUserSafe;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowPage');
  }
  
  setFree(bool){
    this.user.free = !bool;
    console.log(this.user.free);
  }
}

interface Dynamic {
  [key: string]: any
}

