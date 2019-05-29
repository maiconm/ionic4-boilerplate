import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

const PROJECT_INFO = {
  author: 'Maicon Andraski 😎',
  version: '0.0.1 ',
  lastUdate: '5/26/2019 📅',
  GithubProfile: 'https://github.com/maiconm 👻'
};
const BOILERPLATE_NAME = '%cBoilerplate Ionic 4 📲';
const LOG_STYLING = `
    background-color: black;
    font-size: 50px;
    color: green;
  `
;

/**
 * Initializer component.
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  /**
   * @param platform Platform manager.
   * @param splashScreen Splash screen app.
   * @param statusBar Status bar app.
   */
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    console.log(BOILERPLATE_NAME, LOG_STYLING);
    console.table(PROJECT_INFO);
    this.initializeApp();
  }

  /**
   * Initialize app and other Ionic's stuff.
   */
  private initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
