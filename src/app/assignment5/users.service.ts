import { A5User } from './a5-user/a5-user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

    users: A5User[] = [
        new A5User('Ben Dover', true),
        new A5User('Dixie Normous', false),
        new A5User('Jack Goffr', true),
        new A5User('Wendy Wacko', true),
        new A5User('Oliver Loser', false),
        new A5User('Phat Ho', true)
    ];

    getActiveUsers() {
        return this.users.filter(user => user.active);
    }

    getInactiveUsers() {
        return this.users.filter(user => !user.active);
    }

}
