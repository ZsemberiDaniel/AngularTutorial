import { A5UserComponent } from './assignment5/a5-user/a5-user.component';
import { UnlessDirective } from './directive/unless/unless.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { BasicHighlighDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning_alert/warning_alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UsernameComponent } from './username/username.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { ServernewInputComponent } from './servernew/servernew-input/servernew-input.component';
import { ServernewElementComponent } from './servernew/servernew-element/servernew-element.component';
import { ServernewComponent } from './servernew/servernew.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { GameControlComponent } from './assignment4/game-control/game-control.component';
import { OddComponent } from './assignment4/odd/odd.component';
import { EvenComponent } from './assignment4/even/even.component';
import { DirectiveComponent } from './directive/directive.component';
import { AccountComponent } from './account/account.component';
import { AccountInstanceComponent } from './account/account-instance/account-instance.component';
import { AccountInputComponent } from './account/account-input/account-input.component';
import { Assignment5Component } from './assignment5/assignment5.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    ServersComponent,
    UsernameComponent,
    Assignment3Component,
    ServernewInputComponent,
    ServernewElementComponent,
    ServernewComponent,
    Assignment4Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    DirectiveComponent,
    BasicHighlighDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    AccountInputComponent,
    AccountInstanceComponent,
    Assignment5Component,
    A5UserComponent
],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
