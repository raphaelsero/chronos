import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {
  user: Dynamic = {};
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user.loggedIn = false;
  }

  createAccount(){
    this.navCtrl.push(TabsPage);
  }

  login(){
    this.navCtrl.push(TabsPage);    
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
    Object.keys(tabs).map((key) => {
    tabs[ key ].style.transform = 'translateY(56px)';
    });
    } // end if     
  }

  onPageDidEnter()
  {
         
  }

}



interface Dynamic {
  [key: string]: any
}
