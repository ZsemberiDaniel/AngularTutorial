import { ServerResolver } from './routing/routing-servers/server-resolver-service';
import { CanDeactivateGuard } from './routing/routing-servers/routing-edit-server/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { A5UserComponent } from './assignment5/a5-user/a5-user.component';
import { UnlessDirective } from './directive/unless/unless.directive';
import { BetterHighlightDirective } from './directive/better-highlight/better-highlight.directive';
import { BasicHighlighDirective } from './directive/basic-highlight/basic-highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { RoutingComponent } from './routing/routing.component';

import { RoutingHomeComponent } from './routing/routing-home/routing-home.component';
import { RoutingUsersComponent } from './routing/routing-users/routing-users.component';
import { RoutingServersComponent } from './routing/routing-servers/routing-servers.component';
import { RoutingUserComponent } from './routing/routing-users/routing-user/routing-user.component';
import { RoutingEditServerComponent } from './routing/routing-servers/routing-edit-server/routing-edit-server.component';
import { RoutingServerComponent } from './routing/routing-servers/routing-server/routing-server.component';
import { RoutingServersService } from './routing/routing-servers/routing-servers.service';

import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { ErrorPageComponent } from './routing/error-page/error-page.component';
import { ObservablesComponent } from './observables/observables.component';
import { TdFormComponent } from './td-form/td-form.component';
import { Assignment6Component } from './assignment6/assignment6.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { Assignment7Component } from './assignment7/assignment7.component';

@NgModule({
  declarations: [
    RoutingHomeComponent,
    RoutingUsersComponent,
    RoutingServersComponent,
    RoutingUserComponent,
    RoutingEditServerComponent,
    RoutingServerComponent,
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
    A5UserComponent,
    RoutingComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    ObservablesComponent,
    TdFormComponent,
    Assignment6Component,
    ReactiveFormComponent,
    Assignment7Component
],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, CanDeactivateGuard, RoutingServersService, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
