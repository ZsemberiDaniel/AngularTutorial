import { LoggingService } from './../logging.service';
import { Component, Input } from '@angular/core';
import { Account } from '../account.module';

@Component({
  selector: 'app-account-instance',
  templateUrl: './account-instance.component.html',
  styleUrls: ['./account-instance.component.css']
})
export class AccountInstanceComponent {
  @Input() account: Account;

  constructor(private loggingService: LoggingService) {}

  changeToStatus(status: string) {
    this.account.type = status;
    this.loggingService.logStatusChange(this.account, status);
  }
}
