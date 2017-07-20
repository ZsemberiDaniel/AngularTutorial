import { AccountsService } from './../Accounts.service';
import { LoggingService } from './../logging.service';
import { Account } from './../account.module';
import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css']
})
export class AccountInputComponent {

  @ViewChild('accountName') accountNameInput: ElementRef;
  @ViewChild('accountType') accountType: ElementRef;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) {}

  addAccount() {
    const name: string = this.accountNameInput.nativeElement.value;
    const type: string = this.accountType.nativeElement.options[this.accountType.nativeElement.selectedIndex].value;
    const account = new Account(name, type);

    this.loggingService.logAccountCreated(account);
    this.accountsService.addAccount(account);
  }

}
