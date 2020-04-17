import { Component, HostBinding } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

//import it to change locale and load localization messages
import { locale, loadMessages } from "devextreme/localization";

//Load localized messages (English included by default)
import nlmessages from 'devextreme/localization/messages/nl.json';
import demessages from 'devextreme/localization/messages/de.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { 
    loadMessages(nlmessages);
    loadMessages(demessages);
    locale("nl-NL");
  }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}
