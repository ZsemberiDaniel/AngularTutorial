import { LoggingService } from './logging.service';
import { AccountsService } from './Accounts.service';
import { Account } from './account.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [AccountsService, LoggingService]
})
export class AccountComponent {
  constructor(protected accountsService: AccountsService) { }
}
