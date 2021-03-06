import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
import { CallNumber } from '@ionic-native/call-number';
import { SMS } from '@ionic-native/sms';

import { ChartModule } from 'angular2-highcharts';
import Rx from 'rxjs/Rx';

import {MomentModule} from 'angular2-moment';

import { environment } from '../environments/environment';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { NowPage } from '../pages/now/now';
import { SchedulePage } from '../pages/schedule/schedule';
import { TabsPage } from '../pages/tabs/tabs';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { EventPage } from '../pages/event/event';
import { TimerComponent } from '../components/timer/timer';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    SchedulePage,
    NowPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    SearchPage,
    SettingsPage,
    EventPage,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/modules/exporting'),
      require('highcharts/highcharts-more')
    ),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    TabsPage,
    SchedulePage,
    NowPage,
    LoginPage,
    SignupPage,
    ProfilePage,
    SearchPage,
    SettingsPage,
    EventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,    
    File,
    Transfer,
    Camera,
    FilePath,
    CallNumber,
    SMS,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
