import { Injectable } from '@angular/core';
import { AccountsService } from './Accounts.service';

@Injectable()
export class LoggingService {

    logStatusChange(acc: Account, status: string) {
        console.log('Status change for');
        console.log(acc);
        console.log('A status changed to ' + status);
    }

    logAccountCreated(account: Account) {
        console.log('New account');
        console.log(account);
    }
}
