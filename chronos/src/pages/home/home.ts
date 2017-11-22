import { Component , ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

import { DatePipe } from '@angular/common';
import { SearchPage } from '../search/search';
import { EventPage } from '../event/event';
import { ProfilePage } from '../profile/profile';
import { TimerComponent } from '../../components/timer/timer';
import Rx from 'rxjs/Rx';

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
  @ViewChild(TimerComponent) timer: TimerComponent;
  
  friends: FirebaseListObservable<any>;
  userIDs: any;
  call:CallNumber;
  sms: SMS;
  constructor(public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, c:CallNumber, sms:SMS) {
    let myObeservable = Rx.Observable.interval(60000);
    myObeservable.subscribe(x => console.log(x));



      this.call = c;
      this.friends = db.list('/uid/friends', { preserveSnapshot: true });
      this.friends.subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.val());
          console.log(snapshot.val().username);     
          console.log("free: " + snapshot.val().free);     
          console.log(snapshot.val().until);     
          });       
      });

  }
  
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.timer.startTimer();
  //   }, 1000)
  // }

  callNumber(number){
      number = String(number);    
      console.log("calling " + number);
      this.call.callNumber(number, true).then(() => {
        console.log("call worked");        
      }).catch((err) => {
        alert(JSON.stringify(err));
      });      
  }

  sendMessage(number){
    number = String(number);
    this.sms.send(number, 'Test').then(() => {
      console.log("sms worked");        
    }).catch((err) => {
      alert(JSON.stringify(err));
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
