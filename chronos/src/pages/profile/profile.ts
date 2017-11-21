import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
    fireUser: FirebaseObjectObservable<any>;
    fireUserFriends: FirebaseListObservable<any[]>;
    user: Dynamic = {};
    userFriends: Dynamic = [];
    db: AngularFireDatabase;
    content: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public modalCtrl: ModalController) {
    this.content = "events";
    this.fireUser = db.object('/uid3', { preserveSnapshot: true });
    this.fireUser.subscribe(snapshot => {
      this.user.status = snapshot.val().status;
      this.user.until = snapshot.val().until;
      this.user.free = snapshot.val().free;
      this.user.username = snapshot.val().username;
      this.user.bio = snapshot.val().bio;
      this.user.location = snapshot.val().location;
      
      console.log("user");
      console.log(this.user);      
    });   

    this.fireUserFriends = db.list('/uid3/friends', { preserveSnapshot: true });
    this.fireUserFriends.subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        console.log("user friends");
        console.log(snapshot.val());
        this.userFriends.push(snapshot.key);
        console.log(this.userFriends.length);    
      });       
    });
    console.log("friends []");

  }
  goToSettings(){
    console.log("clicked");
    this.navCtrl.push(SettingsPage);
  }

  presentModal() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}

interface Dynamic {
  [key: string]: any
}

