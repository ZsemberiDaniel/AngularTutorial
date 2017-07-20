import { Injectable } from '@angular/core';
import { Account } from './account.module';

@Injectable()
export class AccountsService {

  accounts: Account[] = [];

  addAccount(account: Account) {
      this.accounts.push(account);
  }

  updateStatus(id: number, status: string) {
      this.accounts[id].type = status;
  }

}
